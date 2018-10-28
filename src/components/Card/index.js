import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Card.css';
import star from '../../images/star-clear.svg';
import filledStar from '../../images/star.svg';
import { toggleFavorite, addFavorite, removeFavorite } from '../../actions/userActions';
import { connect } from 'react-redux';
import * as API from '../../utilities/API'

export class Card extends Component {
	constructor() {
		super();
		this.state = {
			expanded: false
		}
	}

	handleFavorite = async (movie) => {
    console.log(movie);
    const { user } = this.props;
		const { id, favorite } = movie;
    if (favorite) {
      API.removeFavorite(movie, user);
    } else {
      API.addFavorite(movie, user);
    }
    this.props.toggleFavorite(id);
  }
  
  handleExpand = () => {
    console.log('goteeeeem');
    this.setState({
      expanded: !this.state.expanded
    })
  }

  render() {
    const { movie, toggleFavorite } = this.props;
    const { expanded } = this.state;

    return(
			<div
        className={expanded ? 'Card expanded-card' : 'Card'}
				style={{backgroundImage: 'url(' + movie.backdrop + ')'}}
        onClick={this.handleExpand}>
        <div className="card-inner-wrapper">
          <h3 className="movie-title" >
            <div className="movie-rating" >Rating {movie.rating}/10</div>
            {movie.title}
            <button
              className={`card-favorite-button
                ${movie.favorite
                  ? 'fav-btn-active'
                  : 'fav-btn-inactive'}`}
              onClick={() => this.handleFavorite(movie)}
            >
              <img alt="" src={movie.favorite ? filledStar : star} />
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

export const mapStateToProps = (state) => ({
	user: state.user,
	favorites: state.favorites
})

export const mapDispatchToProps = (dispatch) => ({
	toggleFavorite: (movieId) => dispatch(toggleFavorite(movieId)),
	addToFavorites: (movie) => dispatch(addFavorite(movie)),
	removeFromFavorites: (movie) => dispatch(removeFavorite(movie))
})

Card.propTypes = {
  movie: PropTypes.object.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
