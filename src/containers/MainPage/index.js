import React, { Component } from 'react';
import CardContainer from '../../components/CardContainer';
import { connect } from 'react-redux';
import * as userActions from '../../actions/userActions';
import * as DataCleaner from '../../utilities/DataCleaner'
import redLogo from '../../images/film-red.svg'

export class MainPage extends Component {
  async componentDidMount() {
    const movies = await DataCleaner.fetchMovies()
    this.props.setMovies(movies)
  }

  handleSignOut = (event) => {
    event.preventDefault();
    this.props.signOut()
  }

  render() {
    return (
      <div className='MainPage'>
        <div className="main-header" >
          <button
            className='all-favorites'>Favorites
          </button>
          <div className="header-title">
            <img className="main-logo" alt="" src={redLogo} />
            <h3 className="header-text">MovieTracker</h3>
          </div>
          <button
            className='sign-out'
            onClick={this.handleSignOut}>Sign Out
          </button>
        </div>
        <div className="header-container-splitter"></div>
        <CardContainer movies={this.props.movies}/>
      </div>
    )
  }
}

export const mapStateToProps = ({user, movies}) => ({user, movies});
export const mapDispatchToProps = (dispatch) => ({
  setMovies: (movies) => dispatch(userActions.setMovies(movies)),
  signOut: () => dispatch(userActions.signOut())
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
