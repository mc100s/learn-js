/* eslint-disable */

import React, { Component } from 'react';
import { Link } from 'react-router-dom'
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

import api from '../api'

window.api = api

import courses from '../courses/index'
// const courses = require('../courses/index').default

class MainNavbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      user: api.loadUser()
    };
  }

  toggle = () => {
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
        console.log('signOut successful');
      }).catch(function (error) {
        console.log('signOut unsuccesfull', error);
      });
  }

  render() {
    return (
      <div className="navbar-wrapper">
        <Navbar color="primary" dark expand="md">
          <NavbarBrand tag={Link} to="/" onClick={resetCourseProgression}>Learn Programming with JS</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Courses
                </DropdownToggle>
                <DropdownMenu right>
                  <ul className="list-unstyled components">
                    {courses.map(course => (
                      <DropdownItem key={course.slug} tag={Link} to={"/course/" + course.slug}>
                        {course.title}
                      </DropdownItem>
                    ))}
                  </ul>
                  {/* <DropdownItem divider /> */}
                </DropdownMenu>
              </UncontrolledDropdown>

              {this.state.user && <NavItem><NavLink>{this.state.user.score} points</NavLink></NavItem>}
              {this.state.user && (<UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  {this.state.user.displayName || this.state.user.email}
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem onClick={this.signOut}>
                    Sign out
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>)}
              {/* {!this.state.user && <Button onClick={this.signIn} outline color="light">Sign in with Google to track your progress</Button>} */}
              {!this.state.user && <Button tag={Link} to="/login" outline color="light">Log in to track your progress</Button>}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }

  componentDidMount() {
    api.onAuthStateChanged(user => {
      if (user) {
        console.log("MainNavbar ==> signed in")
        // User is signed in
        api.getUser()
          .then(user => {
            if (user)
              this.setState({ user })
          })
      } else {
        // User is signed out

        console.log("MainNavbar ==> Signed out")
        this.setState({ user: null })
      }
    })

    api.onUserSnapshot(user => {
      console.log("MainNavbar ==> onUserSnapshot")
      this.setState({ user })
    })
  }
}

export default MainNavbar;
