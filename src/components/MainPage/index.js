import React from 'react';
import CardContainer from '../CardContainer';
import { connect } from 'react-redux';
import * as userActions from '../../actions/userActions';


const MainPage = (props) => {
  const handleSignOut = (event) => {
    event.preventDefault();
    props.signOut()
    // This shits broke props.signOut();
  }
  return (
    <div className='MainPage'>
      <button className='sign-out' onClick={handleSignOut}>Sign Out</button>
      <CardContainer movies={props.movies}/>
    </div>
  )
}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(userActions.signOut())
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
