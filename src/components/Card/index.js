import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Card.css';
import star from '../../images/star-clear.svg';
import filledStar from '../../images/star.svg';
import { toggleFavorite } from '../../actions/movieActions';
import { connect } from 'react-redux';
import * as API from '../../utilities/API'

export class Card extends Component {
	handleFavorite = async (movie) => {
    const { user, addToFavorites, removeFromFavorites, toggleFavorite } = this.props;
		const { id, favorite } = movie;
    if (favorite) {
      API.removeFavorite(movie, user);
    } else {
      API.addFavorite(movie, user);
    }
    toggleFavorite(id);
	}

  render() {
    const { movie, toggleFavorite, favorites } = this.props;

    return(
      <div className='Card' style={{backgroundImage: 'url(' + movie.backdrop + ')'}}>
        <div className="card-inner-wrapper">
          <h3 className="movie-title" >
            <div className="movie-rating" >Rating {movie.rating}/10</div>
            {movie.title}
            <button
              className={`card-favorite-button
                ${movie.favorite || favorites.includes(movie)
                  ? 'fav-btn-active'
                  : 'fav-btn-inactive'}`}
              onClick={() => this.handleFavorite(movie)}
            >
              <img alt="" src={star} />
            </button>
          </h3>
          {/* <img  */}
            {/* src={movie.poster}  */}
            {/* className='poster-image'/> */}
          <p>{movie.overview}</p>
          <p>Opens: {movie.releaseDate}</p>
          <p>Viewer Rating: {movie.rating}</p>
        </div>
      </div>
    )
  }
}

export const mapStateToProps = ({ user, favorites }) => ({ user, favorites })

export const mapDispatchToProps = (dispatch) => ({
	toggleFavorite: (movieId) => dispatch(toggleFavorite(movieId)),
})

Card.propTypes = {
  movie: PropTypes.object.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
