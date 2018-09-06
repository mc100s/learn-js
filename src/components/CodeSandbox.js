import React, { Component } from 'react';
import Prism from "prismjs";
import {
  Button,
  Row,
  Col,
  Input,
  Alert
} from 'reactstrap';
import { insertAt, getIndentationNumberForNextLine, getPairCharacter } from '../utils'

import '../firebase/index'
import firebase from 'firebase'

class CodeSandbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logs: [],
      codeContent: this.props.initialCodeContent
    }
    this.futureLogs = []
  }

  addLog = (content, color= "light") => {
    this.futureLogs.push({
      content,
      color
    });
    this.setState({
      logs: [...this.futureLogs]
    })
  }

  testEquality = (x,y) => {
    if (x==y)
      this.addLog(`Test succesful: ${x} === ${y}`, "success")
    else
      this.addLog(`Test unsuccessful: ${x} !== ${y}`, "warning")
  }

  runCode = () => {

    this.setState({
      logs: []
    })
    this.futureLogs = []
    
    setTimeout(() => {
      try {
        let functionContent = 
          `var THAT = this; ${this.state.codeContent} ;\n${this.props.testContent}`
          functionContent = functionContent 
            .replace(/console\.log/g, `THAT.addLog`)
            .replace(/testEquality/g, `THAT.testEquality`)
        let f = new Function(functionContent);
        f.call(this);

        this.setState({
          logs: [...this.futureLogs]
        })

      } catch (e) {
        this.futureLogs = []
        this.addLog("Error: " + e.message, "danger")
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
          target.setSelectionRange(selectionStart+2,selectionStart+2)
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
          codeContent: insertAt(e.target.value, selectionStart, "\n"+'  '.repeat(nbOfSpacesToInsert))
        },
        () => {
          target.setSelectionRange(selectionStart+1+nbOfSpacesToInsert,selectionStart+1+nbOfSpacesToInsert)
        })
        break;
      case "{":
      case "(":
      case "[":
        e.preventDefault()
        this.setState({
          codeContent: insertAt(e.target.value, selectionStart, e.key + getPairCharacter(e.key) )
        },
        () => {
          target.setSelectionRange(selectionStart+1,selectionStart+1)
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

  addUserToFirebase = () => {
    console.log("addUserToFirebase");
    
    var db = firebase.firestore();
    db.settings({ timestampsInSnapshots: true });

    // Add a second document with a generated ID.
    db.collection("users").add({
      first: "Alan",
      middle: "Mathison",
      last: "Turing",
      born: 1912
    })
    .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });
  }

  render() {
    return (
      <div className="CodeSandbox my-3">

        <Button onClick={this.addUserToFirebase}>Add Alan</Button>

        <Row>
          <Col sm="6">
            <h3>Input <Button className="float-right" color="primary" onClick={this.runCode} size="md">Run (Ctrl + Enter)</Button></h3>
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
            <h3>Output</h3>
            {this.state.logs.map(this.renderLog)}
          </Col>
        </Row>

      </div>
    );
  }

  componentDidMount() {
    Prism.highlightAll();
  }

  componentDidUpdate(prevProps) {

    if (this.props.initialCodeContent !== prevProps.initialCodeContent) {
      // We are on a new page
      this.setState({
        logs: [],
        codeContent: this.props.initialCodeContent
      })
      Prism.highlightAll();
    }
  }
}

export default CodeSandbox;
