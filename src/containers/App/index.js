import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { setMovies } from '../../actions/movieActions';
import * as DataCleaner from '../../utilities/DataCleaner'
import MainPage from '../MainPage';
import Login from '../Login';
import './App.css';

export class App extends Component {
  async componentDidMount() {
    const movies = await DataCleaner.fetchMovies()
    this.props.setMovies(movies)
  }

  filterFavorites() {
    return this.props.movies.filter((movie) => movie.favorite);
  }

  render() {
    const { loggedIn } = this.props.user;
    const { movies } = this.props

    return (
      <div className='App'>
        <Switch>
          <Route exact path='/' render={() => <MainPage movies={movies}/>}/>
          <Route exact path='/login' render={() => loggedIn ?
            <Redirect to='/'/> : <Login/>}/>
          <Route exact path='/favorites' render={() => {
            if(!loggedIn) {
              alert('Please create an account or login to select favorites')
              return <Redirect to='/login'/>
            } else {
              return <MainPage movies={this.filterFavorites()}/>}
            }
          }/>
        <Route render={() => <MainPage movies={movies}/>}/>
      </Switch>
      </div>
    );
  }
}

export const mapStateToProps = ({ user, movies }) => ({ user, movies });

export const mapDispatchToProps = (dispatch) => ({
  setMovies: (movies) => dispatch(setMovies(movies))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
