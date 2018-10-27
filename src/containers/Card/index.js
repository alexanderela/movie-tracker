import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toggleFavorite } from '../../actions/movieActions';
import { removeFavorite, addFavorite } from '../../utilities/API';
import star from '../../images/star-clear.svg';
import './Card.css';

export class Card extends Component {
	constructor() {
		super();
		this.state = {
			expanded: false
		}
	}

	handleFavorite = async (movie) => {
    const { user, toggleFavorite } = this.props;
		const { id, favorite } = movie;
    if (!user.loggedIn) {
      return undefined;
    }
    if (favorite) {
      removeFavorite(movie, user);
    } else {
      addFavorite(movie, user);
    }
    toggleFavorite(id);
	}

  handleExpand = () => {
    console.log('goteeeeem')
    this.setState({
      expanded: !this.state.expanded
    })
  }

  render() {
    const { movie, user } = this.props;

    return(
			<div
				className='Card'
				style={{backgroundImage: 'url(' + movie.backdrop + ')'}}
        onClick={this.handleExpand}>
        <div className="card-inner-wrapper">
          <h3 className="movie-title" >
            <div className="movie-rating" >Rating {movie.rating}/10</div>
            {movie.title}
            <button
              className={`card-favorite-button
                ${movie.favorite && user.loggedIn ? 'fav-btn-active' : 'fav-btn-inactive'}`}
              onClick={() => this.handleFavorite(movie)}>
              <img alt="" src={star} />
            </button>
          </h3>
         <p>{movie.overview}</p>
          <p>Opens: {movie.releaseDate}</p>
          <p>Viewer Rating: {movie.rating}</p>
        </div>
      </div>
    )
  }
}

export const mapStateToProps = ({ user }) => ({ user });

export const mapDispatchToProps = (dispatch) => ({
	toggleFavorite: (movieId) => dispatch(toggleFavorite(movieId)),
});

Card.propTypes = {
  movie: PropTypes.object.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);