import React from 'react';
import './Card.css'

const Card = ({ movie }) => (
	<div className='Card'>
		<h3>{movie.title}</h3>
		<img 
			src={movie.poster} 
			className='poster-image'/>
		<p>{movie.overview}</p>
		<p>Opens: {movie.releaseDate}</p>
		<p>Viewer Rating: {movie.rating}</p>
	</div>
)

export default Card