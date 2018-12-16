/* eslint-disable */

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import MainNavbar from './MainNavbar'
import Home from './pages/Home'
import Course from './pages/Course'
import Signup from './pages/Signup'
import Login from './pages/Login'

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <MainNavbar />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/course/:courseSlug" component={Course} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route render={props => <h1 className="text-center mt-4">404</h1>} />
        </Switch>
      </div>
    );
  }
}

export default App;
