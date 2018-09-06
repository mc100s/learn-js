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
import firebase from "firebase";
import './App.css';

// import { signInWithPopup } from '../firebase/index'
import '../firebase/index'



class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      user: null
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  signIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      console.log('DEBUG result', result);
      // ...
    }).catch(function(error) {
      console.log('DEBUG no!!!!', error);
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
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
    }).catch(function(error) {
      console.log('DEBUG no!!!!', error);
    });
  }

  render() {
    return (
      <div className="App">
        <Navbar color="primary" dark expand="md">
          <NavbarBrand tag={Link} to="/" onClick={resetCourseProgression}>Learn Programming with JavaScript</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {this.state.user &&  <NavItem><NavLink>100 points</NavLink></NavItem>}
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
              {!this.state.user && <Button onClick={this.signIn} outline color="light">Sign in</Button>}
            </Nav>
          </Collapse>
        </Navbar>
        <div className="after-navbar"></div>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/course/:courseSlug" exact component={Course} />
          <Route render={props => <h1 className="text-center mt-4">404</h1>} />
        </Switch>
      </div>
    );
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in
        this.setState({ user })
      } else {
        this.setState({ user: null })
        // User is signed out.
        // ...
      }
    });
    
  }
}

export default App;
