import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Login.css';
import { getFavorites } from '../../actions/movieActions';
import * as userActions from '../../actions/userActions';
import './Login.css';
import * as API from '../../utilities/API';

export class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      name: '',
      error: '',
      create: false,
      favorites: []
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    event.preventDefault();
   this.setState({ [name] : value});
  }

  submitLogin = async (event) => {
    event.preventDefault();
    const { email, password, favorites } = this.state;
    const { user, loginUser } = this.props

    const loginAttempt = await API.loginUser({email, password}, favorites);
    if (loginAttempt) {
      loginUser(loginAttempt);
      this.getFavoritesFromDatabase(user)
    } else {
      this.setState({error: 'Email and Password did not match'});
    }
  }

  getFavoritesFromDatabase = async (user) => {
    const retrievedFavorites = await API.getFavorites(user)
    getFavorites(retrievedFavorites)
  }

  toggleCreate = async (event) => {
    event.preventDefault();
    const { create, email, password, name } = this.state;
    if (create) {
      const message = await API.createUser({email, password, name});
      this.setState({error: 'Email has already been used'})
    }
    this.setState({ create: true});
  }

  render() {
    const { email, password, create, error, name, favorites } = this.state;
    return (
      <div className='Login'>
      <form className='Login-form'>
        <h1> Movie Tracker </h1>
        <h3> Login </h3>
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
        { !create
            ? <button
                type='submit'
                className='login-button'
                onClick={this.submitLogin}>Login
              </button>
            : null }
        <button
          className='create-user'
          onClick={this.toggleCreate}>Create User
        </button>
        { error.length ? <div className="error">{error}</div> : null }
      </form>
      </div>
    )
  }
}

const mapStateToProps = ({ user }) => ({ user });
const mapDispatchToProps = (dispatch) => ({
  loginUser: (user, favorites) => dispatch(userActions.successfulLogin(user, favorites))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
