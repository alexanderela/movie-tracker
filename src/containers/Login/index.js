import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Login.css';
import { setFavorites } from '../../actions/movieActions';
import { successfulLogin } from '../../actions/userActions';
import './Login.css';
import * as API from '../../utilities/API';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

export class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      name: '',
      error: '',
      create: false,
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    e.preventDefault();
   this.setState({ [name] : value});
  }

  submitLogin = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    const { loginUser, setFavorites } = this.props
    const loginAttempt = await API.loginUser({email, password});

    if (loginAttempt) {
      loginUser(loginAttempt);
      const favorites = await API.getFavorites(loginAttempt);
      setFavorites(favorites);
    } else {
      this.setState({error: 'Email and Password did not match'});
    }
  }

  toggleCreate = async (e) => {
    e.preventDefault();
    const { create } = this.state;
    const newUserResponse = await this.newUserResponse(e);

    if (create && newUserResponse.status >= 400) {
      this.setState({error: 'Email has already been used'})
      this.clearInputs()
    } else if (!create || newUserResponse.status <= 400) {
      this.setState({ create: !create, error: '' });
    }
  }

  newUserResponse = async (e) => {
    e.preventDefault()
    const { email, password, name } = this.state;
    return await API.createUser({email, password, name});
  }

  clearInputs = () => {
    this.setState({
      email: '',
      password: '',
      name: ''
    })
  }

  render() {
    const { email, password, create, error, name } = this.state;
    return (
      <div className='Login'>
      <form className='Login-form'>
        <h1 className='Login-header'> Movie Tracker </h1>
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
          type='password'
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
        { error.length ? <div className='error'>{error}</div> : null }
        <NavLink to='/' className='home-link'>Home</NavLink>
      </form>
      </div>
    )
  }
}

const mapStateToProps = ({ user }) => ({ user });
const mapDispatchToProps = (dispatch) => ({
  loginUser: (user) => dispatch(successfulLogin(user)),
  setFavorites: (favoriteMovies) => dispatch(setFavorites(favoriteMovies))
});

Login.propTypes = {
  user: PropTypes.object,
  loginUser: PropTypes.func.isRequired,
  setFavorites: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
