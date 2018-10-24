import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Route, Navlink, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as DataCleaner from '../../utilities/DataCleaner'
import * as API from '../../utilities/API';
import './App.css';
import MainPage from '../MainPage'
import Login from '../Login';

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: []
    }
  }

  async componentDidMount() {
    const movies = await DataCleaner.fetchMovies()
    this.setState({ movies })
  }

  render() {
    const { movies } = this.state
    const { user } = this.props;
    return (
      <div className='App'>
        <Route exact path='/' render={(props) => <MainPage movies={movies} />}/>
        <Route exact path='/login' render={() => user.loggedIn ?
            <Redirect to='/'/> : <Login/>}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user
});

const mapDispatchToProps = (dispatch) => ({});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
