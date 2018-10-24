import React, { Component } from 'react';
import './Login.css';
import * as API from '../../utilities/API';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    event.preventDefault();
   this.setState({ [name] : value});
  }

  submitLogin = async (event) => {
    event.preventDefault();
    const loginAttempt = await API.loginUser(this.state);
    if (typeof loginAttempt === 'object') {
      // put into redux here
    } else {
      // tell user the login failed
    }
    this.setState({email: '', password: ''});
  }

  render() {
    const { email, password } = this.state;
    return (
      <form className='Login'>
        <input
          name='email'
          value={email}
          type='text'
          placeholder='Email address'
          onChange={this.handleChange}/>
        <input
          name='password'
          value={password}
          type='text'
          placeholder='Password'
          onChange={this.handleChange}/>
        <button type='submit' onClick={this.submitLogin}/>
      </form>
    )
  }
}

export default Login;
