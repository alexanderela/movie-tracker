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

  handleExpand = (e) => {
    if (!e.target.className.includes('card-favorite-button')) {
      this.setState({
        expanded: !this.state.expanded
      })
    }
  }

  render() {
    const { movie, user } = this.props;
    const { expanded } = this.state;

    return(
			<div
				className={expanded ? 'Card' : 'Card card-expanded'}
				style={{backgroundImage: 'url(' + movie.backdrop + ')'}}
        onClick={this.handleExpand}>
        <div className="card-inner-wrapper">
          <h3 className="movie-title" >
            <div className="movie-rating" >Rating {movie.rating}/10</div>
            {movie.title}
            <button
              className={`card-favorite-button
                ${movie.favorite && user.loggedIn
                  ? 'fav-btn-active'
                  : 'fav-btn-inactive'}`}
              onClick={() => this.handleFavorite(movie)}>
              <img className="card-favorite-button-image" alt="" src={movie.favorite ? filledStar : star} />
            </button>
          </h3>
          <div className="expanded-lower-container">
            <img 
              src={movie.poster} 
              alt=""
              className='poster-image'/>
            <p className="card-overview">
              <strong>Description</strong>
              <br/>
              {movie.overview}
            </p>
            <p className="card-release-date">
              <strong>Release Date</strong>
              <br/>
              {movie.releaseDate}</p>
          </div>
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