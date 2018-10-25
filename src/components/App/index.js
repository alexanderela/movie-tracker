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

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: []
    }
  }

  async componentDidMount() {
    const movies = await DataCleaner.fetchMovies()
    this.props.setMovies(movies)
  }

  render() {
    const { movies } = this.state
    const { user } = this.props;
    return (
      <div className='App'>
        <Route exact path='/' render={(props) => <MainPage />}/>
        <Route exact path='/login' render={() => user.loggedIn ?
            <Redirect to='/'/> : <Login/>}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  favorites: state.favoritesReducer,
  movies: state.moviesReducer,
});

const mapDispatchToProps = (dispatch) => ({
  setMovies: (movies) => dispatch(userActions.setMovies(movies))
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
