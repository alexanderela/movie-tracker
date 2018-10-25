import React from 'react';
import './Card.css';

const Card = ({ movie }) => (
	<div className='Card' style={{backgroundImage: 'url(' + movie.backdrop + ')'}}>
		<div className="card-inner-wrapper">
			<h3 className="movie-title" >{movie.title}</h3>
			{/* <img  */}
				{/* src={movie.poster}  */}
				{/* className='poster-image'/> */}
			<p>{movie.overview}</p>
			<p>Opens: {movie.releaseDate}</p>
			<p>Viewer Rating: {movie.rating}</p>
		</div>
  </div>
)

export default Card
