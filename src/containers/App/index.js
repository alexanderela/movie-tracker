import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as userActions from '../../actions/userActions';
import * as DataCleaner from '../../utilities/DataCleaner'
import MainPage from '../MainPage';
import Login from '../Login';
import './App.css';
import * as API from '../../utilities/API';

export class App extends Component {
  async componentDidMount() {
    const movies = await DataCleaner.fetchMovies()
    this.props.setMovies(movies)
  }

  render() {
    const { loggedIn } = this.props.user;
    const { movies, favorites } = this.props

    return (
      <div className='App'>
        <Route exact path='/' render={() => <MainPage movies={movies} getFavorites={this.handleGetFavorites}/>}/>
        <Route exact path='/login' render={() => loggedIn ?
          <Redirect to='/'/> : <Login/>}/>
        <Route exact path='/favorites' render={() => {
          if(!loggedIn) {
            alert('Please create an account or login to select favorites')
            return <Login /> 
          } else {
            return <MainPage movies={favorites} getFavorites={this.handleGetFavorites}/>}
          }
        }/>
      </div>
    );
  }
}

export const mapStateToProps = ({ user, movies, favorites }) => ({ user, movies, favorites });

export const mapDispatchToProps = (dispatch) => ({
  setMovies: (movies) => dispatch(userActions.setMovies(movies))
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));