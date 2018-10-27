import React from 'react';
import CardContainer from '../CardContainer';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import * as userActions from '../../actions/userActions';
import redLogo from '../../images/film-red.svg'

export const MainPage = ({ user, signOut }) => {
  const handleSignOut = (event) => {
    event.preventDefault();
    signOut()
  }
  return (
    <div className='MainPage'>
      <div className="main-header" >
        <button
          className='all-favorites'>Favorites
        </button>
        <div className="header-title">
          <img className="main-logo" alt="" src={redLogo} />
          <h3 className="header-text">MovieTracker</h3>
        </div>
        { user.loggedIn
          ? <button 
            className='sign-out' 
            onClick={handleSignOut}>
            <NavLink 
              to='/' 
              className='nav-link'>Sign Out</NavLink>
          </button>
          : <button 
            className='sign-in'>
            <NavLink 
              to='/login' 
              className='nav-link'>Sign In</NavLink>
          </button>
          }
      </div>
      <div className="header-container-splitter"></div>
      <CardContainer  />
    </div>
  )
}

const mapStateToProps = (state) => ({user: state.user});
const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(userActions.signOut())
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
