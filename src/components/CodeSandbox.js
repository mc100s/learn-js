
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Row,
  Col,
  Alert,
} from 'reactstrap';

import 'brace/mode/javascript';
import 'brace/theme/monokai';

import Editor from './Editor'


import api from '../api'

class CodeSandbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logs: [],
      codeContent: this.props.initialCodeContent,
      isDataLoading: true,
      isSolved: false,
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
    // eslint-disable-next-line 
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

        // eslint-disable-next-line 
        let f = new Function(functionContent);
        f.call(this);

        // eval(functionContent)

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

  handleAceLoad = () => {
    let extraCharacter = this.state.codeContent.trim().length > 0 ? '\n' : ''
    this.setState({
      codeContent: this.state.codeContent.trim() + extraCharacter
    })
  }

  handleAceChange = (codeContent, e) => {
    this.setState({
      codeContent
    })
  }

  renderLog = (log, i) => {
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

  signIn = () => {
    api.signInWithGoogle()
      .then(result => {
        window.location.reload();
      })
      .catch(error => {
        console.log('error', error);
      });
  }

  render() {
    return (
      <div className="CodeSandbox mt-5 mb-3">
        <Row>
          <Col sm="8">
            <h3>Input <Button className="float-right" color={this.state.isSolved ? "success" : "primary"} onClick={this.runCode} size="md">Run (Ctrl + Enter)</Button></h3>

            <Editor
              minLines={10}
              value={this.state.codeContent}
              onLoad={this.handleAceLoad}
              onChange={this.handleAceChange}
              commands={[{
                name: 'run-command',
                bindKey: { mac: 'Command-Enter' },
                exec: this.runCode
              }, {
                name: 'run-ctrl',
                bindKey: { win: 'Ctrl-Enter', mac: 'Ctrl-Enter' },
                exec: this.runCode
              }]}
            />

            <Editor value={this.props.testContent} />

          </Col>
          <Col sm="4">
            <h3>Output {this.state.isSolved && `(solved)`}</h3>
            {this.state.logs.map(this.renderLog)}
          </Col>
        </Row>

      </div>
    );
  }

  componentDidMount() {
    this.unsubscribe = api.onUserSnapshot(user => {
      if (user.solvedExercises && user.solvedExercises.includes(this.props.slug)) {
        this.setState({
          isSolved: true,
          isDataLoading: false,
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

      this.unsubscribe = api.onUserSnapshot(user => {
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
