import React, { Component } from 'react';
import './ErrorMessage.css'
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

class ErrorMessage extends Component {
  render() {
    const { message, closeError, user } = this.props

    return (
      <div className='ErrorMessage'>
        <div className='ErrorMessage_inner'>
          <h1 className='Login-header'> Movie Tracker </h1>
          <p>{message}</p>
          <button className='home-button-error'
            onClick={closeError}>
            <NavLink to='/' className='home-link-error'>Home
            </NavLink>
          </button>
          {!user.loggedIn &&
          <button className='login-button-error'
            onClick={closeError}>
            <NavLink to='/login' className='login-link-error'>Login/Create Account
            </NavLink>
          </button>
        }
        </div>
      </div>
    );
  }
}

ErrorMessage.propTypes = {
  message: PropTypes.string,
  closeError: PropTypes.func,
  user: PropTypes.object
}

export default ErrorMessage;
