import React from 'react';
import './Card.css';
import star from '../../images/star-clear.svg';
import filledStar from '../../images/star.svg';
import { toggleFavorite, addFavorite, removeFavorite } from '../../actions/userActions';
import { connect } from 'react-redux';
import * as API from '../../utilities/API'

const Card = ({ movie, user, favorites, toggleFavorite, addToFavorites, removeFromFavorites }) => {
	const handleFavorite = async (movie) => {
		const { id, favorite } = movie;
    if (favorite) {
      API.removeFavorite(movie, user);
    } else {
      API.addFavorite(movie, user);
    }
    toggleFavorite(id);
	}

	return(
		<div className='Card' style={{backgroundImage: 'url(' + movie.backdrop + ')'}}>
			<div className="card-inner-wrapper">
				<h3 className="movie-title" >
					<div className="movie-rating" >Rating {movie.rating}/10</div>
					{movie.title}
					<button
						className={`card-favorite-button
							${movie.favorite
								? 'fav-btn-active'
								: 'fav-btn-inactive'}`}
						onClick={() => handleFavorite(movie)}
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

export const mapStateToProps = (state) => ({
	user: state.user,
	favorites: state.favorites
})

export const mapDispatchToProps = (dispatch) => ({
	toggleFavorite: (movieId) => dispatch(toggleFavorite(movieId)),
	addToFavorites: (movie) => dispatch(addFavorite(movie)),
	removeFromFavorites: (movie) => dispatch(removeFavorite(movie))
})

export default connect(mapStateToProps, mapDispatchToProps)(Card);
