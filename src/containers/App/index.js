import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { setMovies } from '../../actions/movieActions';
import * as DataCleaner from '../../utilities/DataCleaner'
import MainPage from '../MainPage';
import Login from '../Login';
import './App.css';
import ErrorMessage from '../../components/ErrorMessage';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      showError: false
    }
  }

  async componentDidMount() {
    const movies = await DataCleaner.fetchMovies()
    this.props.setMovies(movies)
  }

  filterFavorites = () => {
    return this.props.movies.filter((movie) => movie.favorite);
  }

  enableError = () => {
    const { loggedIn } = this.props.user
    const filteredMovies = this.filterFavorites()
    if (!loggedIn || !filteredMovies.length) {
      this.toggleError()
    }
  }

  toggleError = () => {
    this.setState({ showError: !this.state.showError })
  }

  render() {
    const { loggedIn } = this.props.user;
    const { movies, user } = this.props
    const { showError } = this.state

    return (
      <div className='App'>
        <Switch>
          <Route exact path='/' render={() => {
            return <MainPage 
              movies={movies} 
              enableError={this.enableError}/>
            }
          }/>
          <Route exact path='/login' render={() => loggedIn ?
            <Redirect to='/'/> : <Login/>}/>
          <Route exact path='/favorites' render={() => {
            if(!loggedIn && showError) {
              return <ErrorMessage 
                        closeError={this.toggleError} 
                        message={'Please login or create an account to add/view favorites.'}
                        user={user}
                        />
            } else if (loggedIn && showError){
              return <ErrorMessage 
                        closeError={this.toggleError} 
                        message={'You currently have no favorites selected.'}
                        user={user}
                        />                
            } else {
              return <MainPage 
                        movies={this.filterFavorites()} 
                        enableError={this.enableError}
                        user={user}
                        />
                    }
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
