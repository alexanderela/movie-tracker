import React from 'react';
import './CardContainer.css'
import Card from '../Card';
import { toggleFavorite } from '../../actions/userActions';
import { connect } from 'react-redux';


const CardContainer = ({ movies }) => {
	console.log('movies: ', movies)
	const movieCards = movies.map(movie => {
		return <Card movie={movie} key={movie.title}  />
	})

	return(
		<div className='CardContainer'>
			{ movieCards }
		</div>
	)
}

export const mapStateToProps = (state) => ({
	movies: state.movies
})

export const mapDispatchToProps = (dispatch) => ({
	// changeFavorite: (id) => dispatch(toggleFavorite(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);