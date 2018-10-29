import React, { Component } from 'react';
import './ErrorMessage.css'
import { NavLink } from 'react-router-dom';

class ErrorMessage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='ErrorMessage'>
        <div className='ErrorMessage_inner'>
          <h1 className='Login-header'> Movie Tracker </h1>
          <p>Please login or create an account to add/view favorites.</p>
          <button 
            onClick={this.props.closeError}>
            <NavLink to='/' className='home-link-error'>Home
            </NavLink>
          </button>
        </div>
      </div>
    );
  }
}

export default ErrorMessage;