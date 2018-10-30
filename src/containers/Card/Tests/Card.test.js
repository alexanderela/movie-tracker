import React from 'react';
import { shallow } from 'enzyme';
import { Card } from '../';

describe('Card', () => {
  let wrapper;
  beforeEach(() => {
    const mockMovie = {
      movie: {
        title: 'Movie Title',
        poster: 'Movie Poster',
        overview: 'Movie Overview',
        releaseData: 'Movie Release Date',
        rating: 'Movie Rating'
      }}
    wrapper = shallow(<Card movie={mockMovie}/>);
  });

  it('Should render like snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('returns undefined upon invocation of handleFavorite if user is not logged in', () => {

  })

  it('invokes addFavorite upon invocation of handleFavorite if favorites exist', () => {
    
  })

  it('invokes addFavorite upon invocation of handleFavorite if favorites dont exist', () => {
    
  })

  it('invokes toggleFavorite upon invocation of handleFavorite', () => {
    
  })
});
