import React, { Component } from 'react';
import './App.css';
import { Route, Navlink } from 'react-router-dom';
import * as DataCleaner from '../Utilities/DataCleaner'
import CardContainer from '../CardContainer'

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
        <Route exact path='/' render={(props) => <CardContainer {...props} movies={movies} />}
        />
      </div>
    );
  }
}

export default App;
