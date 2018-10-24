import React, { Component } from 'react';
import { Route, Navlink } from 'react-router-dom';
import * as DataCleaner from '../../utilities/DataCleaner'
import * as API from '../../utilities/API';
import './App.css';
import CardContainer from '../CardContainer'
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

    return (
      <div className='App'>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/' render={(props) => <CardContainer {...props} movies={movies} />}/>
      </div>
    );
  }
}

export default App;
