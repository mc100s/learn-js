/* eslint-disable */

import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button
} from 'reactstrap';
import { resetCourseProgression } from '../utils'
import Home from './pages/Home'
import Course from './pages/Course'

import api from '../api'

window.api = api

class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      user: api.loadUser()
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  signIn = () => {
    api.signInWithGoogle()
      .then(result => {
        // // This gives you a Google Access Token. You can use it to access the Google API.
        // var token = result.credential.accessToken;
        // // The signed-in user info.

        api.getUser()
          .then(user => {
            if (user)
              this.setState({ user })
          })
        // ...
      })
      .catch(error => {
        console.log('error', error);
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  }

  signOut = () => {
    api.signOut()
      .then(function () {
        // Sign-out successful.
      }).catch(function (error) {
        console.log('DEBUG no!!!!', error);
      });
  }

  render() {
    return (
      <div className="App">
        <div className="navbar-wrapper">
          <Navbar color="primary" dark expand="md">
            <NavbarBrand tag={Link} to="/" onClick={resetCourseProgression}>Learn Programming with JavaScript</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                {this.state.user && <NavItem><NavLink>{this.state.user.score} points</NavLink></NavItem>}
                {this.state.user && (<UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    {this.state.user.displayName}
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem onClick={this.signOut}>
                      Sign out
                  </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>)}
                {!this.state.user && <Button onClick={this.signIn} outline color="light">Sign in with Google to track your progress</Button>}
              </Nav>
            </Collapse>
          </Navbar>
        </div>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/course/:courseSlug" exact component={Course} />
          <Route render={props => <h1 className="text-center mt-4">404</h1>} />
        </Switch>
      </div>
    );
  }

  componentDidMount() {
    api.onAuthStateChanged(user => {
      if (user) {
        // User is signed in
        api.getUser()
          .then(user => {
            if (user)
              this.setState({ user })
          })
      } else {
        // User is signed out
        this.setState({ user: null })
      }
    })

    api.onUserSnapshot(user => {
      this.setState({ user })
    })
  }
}

export default App;
