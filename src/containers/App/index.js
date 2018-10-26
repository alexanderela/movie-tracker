import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Route, Navlink, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as DataCleaner from '../../utilities/DataCleaner'
import * as API from '../../utilities/API';
import './App.css';
import MainPage from '../MainPage';
import Login from '../Login';
import * as userActions from '../../actions/userActions';

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
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({ user });

const mapDispatchToProps = (dispatch) => ({
  setMovies: (movies) => dispatch(userActions.setMovies(movies))
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
