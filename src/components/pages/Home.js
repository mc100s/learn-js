import React, { Component } from 'react';
import { Link } from 'react-router-dom' 
import CandSanbox from '../CodeSandbox'

class Home extends Component {
  render() {
    return (
      <div className="Home container mt-3">
        <h1>Home</h1>

        <ul>
          <li><Link to="/course/1">Course 1</Link></li>
        </ul>

        <CandSanbox initialCodeContent={`console.log('Hello world!');
function f(a,b){return a*b};
      
//let x = 0; let x = 1
setTimeout(function() {
  console.log('1 second later');
}, 1000)
        `} testContent={`// Tests
testEquality(2+3,5);
testEquality(f(6,7),42);`} />
      </div>
    );
  }
}

export default Home;
