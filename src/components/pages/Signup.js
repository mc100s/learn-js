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

export default class Signup extends Component {
  state = {
    email: '',
    password1: '',
    password2: '',
    errorMessage: ''
  }
  signupSubmit = (e) => {
    e.preventDefault()
    this.setState({
      successMessage: '',
      errorMessage: '',
    }, () => {
      if (this.state.password1 !== this.state.password2) {
        this.setState({
          errorMessage: 'The passwords don\'t match'
        })
        return
      }
      api.signUp(this.state.email, this.state.password1)
        .then(() => {
          this.setState({
            successMessage: "Perfect! To verify your email address, we've sent you an email with a verification link."
          })
        })
        .catch(error => {
          console.log('error', error);
          this.setState({
            errorMessage: error.message
          })
        });
    })
  }
  handleInputChange(stateKey, value) {
    this.setState({
      [stateKey]: value
    })
  }
  render() {
    return (
      <Container className="Signup">
        <h1>Create an account</h1>
        <Form onSubmit={this.signupSubmit}>
          <FormGroup>
            <Input placeholder="Email" type="text" value={this.state.email} onChange={e => this.handleInputChange('email', e.target.value)} />
          </FormGroup>
          <FormGroup>
            <Input placeholder="Password" type="password" value={this.state.password1} onChange={e => this.handleInputChange('password1', e.target.value)} />
          </FormGroup>
          <FormGroup>
            <Input placeholder="Confirm Password" type="password" value={this.state.password2} onChange={e => this.handleInputChange('password2', e.target.value)} />
          </FormGroup>
          <Button color="primary">Sign up</Button>
        </Form>

        {this.state.errorMessage && <Alert color="danger">{this.state.errorMessage}</Alert>}
        {this.state.successMessage && <Alert color="success">{this.state.successMessage}</Alert>}

        <hr />
        Already have an acount? <Link to="/login">You can sign in here</Link>
      </Container>
    )
  }
}
