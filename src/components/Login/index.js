import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as userActions from '../../actions/userActions';
import './Login.css';
import * as API from '../../utilities/API';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      name: '',
      error: false,
      create: false
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    event.preventDefault();
   this.setState({ [name] : value});
  }

  submitLogin = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    const loginAttempt = await API.loginUser({email, password});
    if (loginAttempt) {
      this.props.loginUser(loginAttempt);
    } else {
      this.setState({error: true});
    }
  }

  toggleCreate = (event) => {
    event.preventDefault();
    const { create, email, password, name } = this.state;
    if (this.state.create) {
      API.createUser({email, password, name});
    }
    this.setState({ create: true});
  }

  render() {
    const { email, password, create, error, name } = this.state;
    return (
      <form className='Login'>
        { create ?
            <input
              name='name'
              value={name}
              type='text'
              placeholder='Name'
              onChange={this.handleChange}/>
            : null }
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
        { !create ?
        <button type='submit' onClick={this.submitLogin}>Login</button>
            : null }
        <button className='create-user' onClick={this.toggleCreate}>Create User</button>
        { error ? <div className="error">Error</div> : null }
      </form>
    )
  }
}
const mapStateToProps = (state) => ({user: state.user});
const mapDispatchToProps = (dispatch) => ({
  loginUser: (user) => dispatch(userActions.successfulLogin(user))
});


export default connect(mapStateToProps, mapDispatchToProps)(Login);
