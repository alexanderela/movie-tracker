import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Route, Redirect } from 'react-router-dom';
import MainPage from '../../containers/MainPage';
import Login from '../../containers/Login';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Route exact path='/' render={(props) => <MainPage />}/>
        <Route exact path='/login' render={() => <Login/>}/>
      </div>
    );
  }
}

export default App;
