import React from 'react';
import './Card.css';
import star from '../../images/star-clear.svg';
import filledStar from '../../images/star.svg';
import { toggleFavorite } from '../../actions/userActions';
import { connect } from 'react-redux';

export const changeFavorite = (id) => {
	console.log(id)
}

const Card = ({ movie }) => (
	<div className='Card' style={{backgroundImage: 'url(' + movie.backdrop + ')'}}>
		<div className="card-inner-wrapper">
			<h3 className="movie-title" >{movie.title}</h3>
			<button className="card-favorite-button" onClick={() => changeFavorite(movie.id)} >
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

})

export const mapDispatchToProps = (dispatch) => ({
	changeFavorite: (id) => dispatch(toggleFavorite(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Card);