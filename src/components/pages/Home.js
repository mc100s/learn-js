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
      </div>
    );
  }
}

export default Home;
