import React, { Component } from 'react'
import {
  Alert,
  Button,
  Container,
  Form,
  FormGroup,
  Input,
} from 'reactstrap';
import { Link } from 'react-router-dom'
import api from '../../api'

export default class Login extends Component {
  state = {
    email: '',
    password: '',
    errorMessage: '',
  }
  loginSubmit = (e) => {
    e.preventDefault()
    this.setState({
      errorMessage: ''
    }, () => {
      api.signIn(this.state.email, this.state.password)
        .then(result => {
          console.log("Success", result);
          api.getUser()
            .then(user => {
              if (user)
                this.props.history.push('/course/intro/intro-to-js')
            })
        })
        .catch(error => {
          console.log("Error", error)
          this.setState({
            errorMessage: error.message
          })
        })
    })
  }
  handleInputChange(stateKey, value) {
    this.setState({
      [stateKey]: value
    })
  }
  signInGoogle = () => {
    api.signInWithGoogle()
      .then(result => {
        api.getUser()
          .then(user => {
            if (user)
              this.props.history.push('/course/intro/intro-to-js')
          })
      })
      .catch(error => {
        console.log('error', error);
      });
  }
  render() {
    return (
      <Container className="Login">
        <h1>Log in with Google</h1>
        <Button className="mt-3" onClick={this.signInGoogle} outline color="primary">
          <img src="/images/google-logo.png" alt="Google" className="google-logo" />
          Log in
        </Button>

        <hr />

        <h1>Log in</h1>
        <Form onSubmit={this.loginSubmit}>
          <FormGroup>
            <Input placeholder="Email" type="text" value={this.state.email} onChange={e => this.handleInputChange('email', e.target.value)} />
          </FormGroup>
          <FormGroup>
            <Input placeholder="Password" type="password" value={this.state.password} onChange={e => this.handleInputChange('password', e.target.value)} />
          </FormGroup>
          <Button color="primary">Log in</Button>
        </Form>

        {this.state.errorMessage && <Alert color="danger">{this.state.errorMessage}</Alert>}

        <hr />
        Don't have any acount? <Link to="/signup">You can sign up here</Link>
      </Container>
    )
  }
}
