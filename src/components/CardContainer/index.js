import React from 'react';
import './CardContainer.css'
import Card from '../Card';

const CardContainer = ({ movies }) => {
	const movieCards = movies.map(movie => {
		return <Card movie={movie}/>
	})

	return(
		<div className='CardContainer'>
			{ movieCards }
		</div>
	)
}

export default CardContainer
