import React from 'react';
import './Card.css';
import star from '../../images/star-clear.svg';
import filledStar from '../../images/star.svg';
import { toggleFavorite } from '../../actions/userActions';
import { connect } from 'react-redux';

const Card = ({ movie, changeFavorite, movies }) => (
	<div className='Card' style={{backgroundImage: 'url(' + movie.backdrop + ')'}}>
		<div className="card-inner-wrapper">
			<h3 className="movie-title" >{movie.title}</h3>
			<button className="card-favorite-button" onClick={() => changeFavorite(movie.id, movies)} >
				<img alt="" src={star} />
			</button>
			{/* <img  */}
				{/* src={movie.poster}  */}
				{/* className='poster-image'/> */}
			<p>{movie.overview}</p>
			<p>Opens: {movie.releaseDate}</p>
			<p>Viewer Rating: {movie.rating}</p>
		</div>
  </div>
)

export const mapStateToProps = (state) => ({
	movies: state.movies
})

export const mapDispatchToProps = (dispatch) => ({
	changeFavorite: (id, movies) => dispatch(toggleFavorite(id, movies))
})

export default connect(mapStateToProps, mapDispatchToProps)(Card);