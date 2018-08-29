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
  DropdownItem
} from 'reactstrap';
import { resetCourseProgression } from '../utils'
import Home from './pages/Home'
import Course from './pages/Course'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className="App">
        <Navbar color="primary" dark expand="md">
          <NavbarBrand tag={Link} to="/" onClick={resetCourseProgression}>Learn Programming with JavaScript</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          {/* <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse> */}
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
}

export default App;
