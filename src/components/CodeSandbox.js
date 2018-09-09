import React, { Component } from 'react';
import Prism from "prismjs";
import PropTypes from 'prop-types';
import {
  Button,
  Row,
  Col,
  Input,
  Alert
} from 'reactstrap';
import { insertAt, getIndentationNumberForNextLine, getPairCharacter } from '../utils'

import api from '../api'

class CodeSandbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logs: [],
      codeContent: this.props.initialCodeContent,
      isSolved: false
    }
    this.futureLogs = []
  }

  addLog = (content, color = "light", isSuccess = true) => {
    this.futureLogs.push({
      content,
      color,
      isSuccess
    });
    this.setState({
      logs: [...this.futureLogs]
    })
  }

  testEquality = (x, y) => {
    if (x == y)
      this.addLog(`Test succesful: ${x} === ${y}`, "success")
    else
      this.addLog(`Test unsuccessful: ${x} !== ${y}`, "warning", false)
  }

  runCode = () => {
    api.incrementNbOfExecutions()

    this.setState({
      logs: []
    })
    this.futureLogs = []

    setTimeout(() => {
      try {
        let functionContent =
          `var THAT = this; ${this.state.codeContent} ;\n${this.props.testContent}`
            .replace(/console\.log/g, `THAT.addLog`)
            .replace(/testEquality/g, `THAT.testEquality`)
        let f = new Function(functionContent);
        f.call(this);

        console.log('DEBUG this.futureLogs', this.futureLogs);

        if (this.futureLogs.every(log => log.isSuccess)) {
          console.log("CALL of api.incrementScore()");
          // api.incrementScore()
          api.addSolvedExercise(this.props.slug || "")
        }

        this.setState({
          logs: [...this.futureLogs]
        })

      } catch (e) {
        this.futureLogs = []
        this.addLog("Error: " + e.message, "danger", false)
      }
    }, 200)

  }

  handleChange = (e) => {
    this.setState({
      codeContent: e.target.value
    })
  }

  handleKeyDown = (e) => {
    let target = e.target
    let selectionStart = e.target.selectionStart
    switch (e.key) {
      case "Tab":
        e.preventDefault()
        this.setState({
          codeContent: insertAt(e.target.value, selectionStart, `  `)
        },
          () => {
            target.setSelectionRange(selectionStart + 2, selectionStart + 2)
          })
        break;
      case "Enter":
        e.preventDefault()
        if (e.ctrlKey || e.metaKey) {
          this.runCode()
          return
        }
        let nbOfSpacesToInsert = getIndentationNumberForNextLine(e.target.value, selectionStart)
        this.setState({
          codeContent: insertAt(e.target.value, selectionStart, "\n" + '  '.repeat(nbOfSpacesToInsert))
        },
          () => {
            target.setSelectionRange(selectionStart + 1 + nbOfSpacesToInsert, selectionStart + 1 + nbOfSpacesToInsert)
          })
        break;
      case "{":
      case "(":
      case "[":
        e.preventDefault()
        this.setState({
          codeContent: insertAt(e.target.value, selectionStart, e.key + getPairCharacter(e.key))
        },
          () => {
            target.setSelectionRange(selectionStart + 1, selectionStart + 1)
          })
        break;
    }

  }

  renderLog = (log, i) => {
    // if (log instanceof Error)
    //   return <figure key={i} className="highlight"><pre style={{color: "red"}}>Error: {log.message}</pre></figure>

    let message;
    try {
      message = JSON.stringify(log.content, null, 2)
    }
    catch (e) {
      message = "Error"
    }
    finally {
      return <Alert color={log.color} key={i} className="highlight"><pre>{message}</pre></Alert>
    }
  }

  render() {
    return (
      <div className="CodeSandbox mt-5 mb-3">

        <Row>
          <Col sm="6">
            <h3>Input <Button className="float-right" color={this.state.isSolved ? "success" : "primary"} onClick={this.runCode} size="md">Run (Ctrl + Enter)</Button></h3>
            <pre>
              {/* TODO: look here for color syntax of teaxtarea: https://gordonlesti.com/a-prism-based-web-text-editor-with-syntax-highlighting/ */}
              <code className="">
                <Input type="textarea" ref="input" value={this.state.codeContent} onChange={this.handleChange} onKeyDown={this.handleKeyDown} />
              </code>
            </pre>
            <pre>
              <code className="language-javascript">
                {this.props.testContent}
              </code>
            </pre>
          </Col>
          <Col sm="6">
            <h3>Output {this.state.isSolved && `(solved)`}</h3>
            {this.state.logs.map(this.renderLog)}
          </Col>
        </Row>

      </div>
    );
  }

  componentDidMount() {
    Prism.highlightAll();

    this.unsubscribe = api.onUserSnapshot(user => {
      console.log('DEBUG CodeSanbox user', user);
      if (user.solvedExercises.includes(this.props.slug)) {
        this.setState({
          isSolved: true
        })
      }
    })
  }

  componentDidUpdate(prevProps) {

    if (this.props.initialCodeContent !== prevProps.initialCodeContent) {
      // We are on a new page
      this.unsubscribe()
      this.setState({
        logs: [],
        codeContent: this.props.initialCodeContent,
        isSolved: false
      })
      Prism.highlightAll();

      this.unsubscribe = api.onUserSnapshot(user => {
        console.log('DEBUG CodeSanbox user', user);
        if (user.solvedExercises.includes(this.props.slug)) {
          this.setState({
            isSolved: true
          })
        }
      })
    }
  }

  componentWillUnmount() {
    this.unsubscribe()
  }
}

CodeSandbox.propTypes = {
  initialCodeContent: PropTypes.string.isRequired,
  testContent: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
}

export default CodeSandbox;
