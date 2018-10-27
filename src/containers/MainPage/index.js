import React from 'react';
import CardContainer from '../CardContainer';
import { connect } from 'react-redux';
import * as userActions from '../../actions/userActions';
import redLogo from '../../images/film-red.svg'

export const MainPage = (props) => {
  const handleSignOut = (event) => {
    event.preventDefault();
    props.signOut()
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
        <button 
          className='sign-out' 
          onClick={handleSignOut}>Sign Out
        </button>
      </div>
      <div className="header-container-splitter"></div>
      <CardContainer  />
    </div>
  )
}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(userActions.signOut())
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
