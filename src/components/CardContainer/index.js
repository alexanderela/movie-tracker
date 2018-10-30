import React from 'react';
import PropTypes from 'prop-types';
import './CardContainer.css';
import Card from '../../containers/Card';

const CardContainer = ({ movies }) => {
  const movieCards = movies.map(movie => {
    return <Card movie={movie} key={movie.title}  />;
  });

  return (
    <div className='CardContainer'>
      { movieCards }
    </div>
  );
};

CardContainer.propTypes = {
  movies: PropTypes.array.isRequired
};

export default CardContainer;
