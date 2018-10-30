import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toggleFavorite } from '../../actions/movieActions';
import { removeFavorite, addFavorite } from '../../utilities/API';
import star from '../../images/star-clear.svg';
import './Card.css';
import filledStar from '../../images/star.svg';
import * as API from '../../utilities/API';

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

  returnRatingColor = num => {
    if (num < 6) {
      return '#BC2D2B'
    } else if (num >= 6 && num < 7) {
      return '#F5D14B'
    } else {
      return '#51B04D';
    }
  }

  render() {
    const { movie, user } = this.props;
    const { expanded } = this.state;
    const ratingStyles = {
      width: `${this.props.movie.rating * 10}%`,
      background: this.returnRatingColor(movie.rating)
    };

    return(
			<div
				className={!expanded ? 'Card' : 'Card expanded-card'}
				style={{backgroundImage: 'url(' + movie.backdrop + ')'}}
        onClick={this.handleExpand}>
        <div className="expanded-background"></div>
        <div className="card-inner-wrapper">
          <h3 className="movie-title" >
            <div className="movie-rating" >
              {!expanded &&
                <div>Rating {movie.rating}</div>
              }
            </div>
            {movie.title}
            <button
              className={`card-favorite-button
                ${movie.favorite && user.loggedIn
                  ? 'fav-btn-active'
                  : 'fav-btn-inactive'}`}
              onClick={() => this.handleFavorite(movie)}>
              <img className="card-favorite-button-star" alt="" src={movie.favorite ? filledStar : star} />
            </button>
          </h3>
          <div className="expanded-lower-container">
            <img 
              src={movie.poster} 
              alt=""
              className='poster-image'/>
            <div className="lower-middle-expanded">
              <p className="card-overview">
                <strong>Description</strong>
                <br />
                {movie.overview}
              </p>
              {expanded &&
                <div className="rating-container">
                  <div className="rating-bar" style={ratingStyles} >{movie.rating} / 10</div>
                </div>
              }
            </div>
            <p className="card-release-date">
              <strong>Release Date</strong>
              <br/>
              {movie.releaseDate}
            </p>
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