import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom' 
import {
  Button,
  Row,
  Col,
  Input
} from 'reactstrap';
import { insertAt, getIndentationNumberForNextLine, getPairCharacter } from '../utils'

class CodeSandbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logs: [],
      codeContent: `console.log('Hello world!');
console.log('Hello world 2!');
      
//let x = 0; let x = 1
setTimeout(function() {
  console.log('1 second later');
}, 1000)
        `,
    }
    this.futureLogs = []
  }

  addLog = (log) => {
    this.futureLogs.push(log);
    this.setState({
      logs: [...this.futureLogs]
    })
  }

  runCode = () => {

    this.setState({
      logs: []
    })
    this.futureLogs = []
    
    setTimeout(() => {
      try {
        let f = new Function(`var THAT = this;` + this.state.codeContent.replace(/console\.log/g, `THAT.addLog`));
        f.call(this);

        this.setState({
          logs: [...this.futureLogs]
        })

      } catch (e) {
        console.log("Error");
        console.log(e.message);
        this.setState({
          logs: [e]
        })
      }
    }, 200)

  }
  
  handleChange = (e) => {
    this.setState({
      codeContent: e.target.value
    })
  }

  handleKeyDown = (e) => {
    console.log("handleKeyDown");
    console.log("e.metaKey", e.metaKey);
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
        console.log(e.target.value);
        let nbOfSpacesToInsert = getIndentationNumberForNextLine(e.target.value, selectionStart)
        console.log('DEBUG nbOfSpacesToInsert', nbOfSpacesToInsert, selectionStart, "\n"+'  '.repeat(nbOfSpacesToInsert));
        this.setState({
          codeContent: insertAt(e.target.value, selectionStart, "\n"+'  '.repeat(nbOfSpacesToInsert))
        },
        () => {
          target.setSelectionRange(selectionStart+1+nbOfSpacesToInsert,selectionStart+1+nbOfSpacesToInsert)
        })
        console.log()
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
    if (log instanceof Error)
      return <figure key={i} className="highlight"><pre style={{color: "red"}}>Error: {log.message}</pre></figure>
    
    let message;
    try {
      message = JSON.stringify(log, null, 2)
    }
    catch (e) {
      message = "Error"
    }
    finally {
      return <figure key={i} className="highlight"><pre>{message}</pre></figure>
    }
  }

  render() {
    return (
      <div className="CodeSandbox">
        <Row>
        <Col sm="6">
            <h2>Input <Button style={{float: "right"}} color="primary" onClick={this.runCode}>Run (Ctrl + Enter)</Button></h2>
            <pre>
              <code className="language-html" data-lang="html">
                <Input type="textarea" ref="input" value={this.state.codeContent} onChange={this.handleChange} onKeyDown={this.handleKeyDown} />
              </code>
            </pre>
          </Col>
          <Col sm="6">
            <h2>Output</h2>
            {this.state.logs.map(this.renderLog)}
          </Col>
        </Row>

      </div>
    );
  }
}

export default CodeSandbox;
