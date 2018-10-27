import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as userActions from '../../actions/userActions';
import * as DataCleaner from '../../utilities/DataCleaner'
import MainPage from '../MainPage';
import Login from '../Login';
import './App.css';

export class App extends Component {
  async componentDidMount() {
    const movies = await DataCleaner.fetchMovies()
    this.props.setMovies(movies)
  }

  render() {
    const { loggedIn } = this.props.user;
    return (
      <div className='App'>
        <Route exact path='/' render={(props) => <MainPage />}/>
        <Route exact path='/login' render={() => loggedIn ?
          <Redirect to='/'/> : <Login/>}/>
        <Route exact path='/favorites' render={() => !loggedIn ?
          <Redirect to='/'/> : <Login/>}/>
      </div>
    );
  }
}

export const mapStateToProps = ({ user }) => ({ user });

export const mapDispatchToProps = (dispatch) => ({
  setMovies: (movies) => dispatch(userActions.setMovies(movies))
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
