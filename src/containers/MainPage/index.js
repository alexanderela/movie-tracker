import React from 'react';
import CardContainer from '../../components/CardContainer';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import * as userActions from '../../actions/userActions';
import * as movieActions from '../../actions/movieActions';
import redLogo from '../../images/film-red.svg';
import PropTypes from 'prop-types';

export const MainPage = ({ user, signOut, movies, clearFavorites, enableError }) => {
  const handleSignOut = (event) => {
    event.preventDefault();
    clearFavorites(movies);
    signOut();
  }

  return (
    <div className='MainPage'>
      <div className="main-header" >
        <button className='all-favorites' onClick={enableError}>
          <NavLink
            to='/favorites'
            className='nav-link'>Favorites
          </NavLink>
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
                className='nav-link'>Sign Out
              </NavLink>
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
      <CardContainer movies={movies}/>
    </div>
  )
}

const mapStateToProps = ({ user }) => ({ user });
const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(userActions.signOut()),
  clearFavorites: (movies) => dispatch(movieActions.clearFavorites(movies))
});

MainPage.propTypes = {
  user: PropTypes.object.isRequired,
  movies: PropTypes.object.isRequired,
  signOut: PropTypes.func.isRequired,
  clearFavorites: PropTypes.func.isRequired,
  enableError: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
