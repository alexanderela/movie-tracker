import React from 'react';
import PropTypes from 'prop-types';
import './CardContainer.css'
import Card from '../../components/Card';
import { connect } from 'react-redux';


const CardContainer = ({ movies }) => {
	const movieCards = movies.map(movie => {
		return <Card movie={movie} key={movie.title}  />
	})

	return (
		<div className='CardContainer'>
			{ movieCards }
		</div>
	)


}

export const mapStateToProps = ({}) => ({});

export const mapDispatchToProps = (dispatch) => ({ });

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);
