import React from 'react';
import { shallow } from 'enzyme';
import { Card } from '../';

describe('Card', () => {
  let wrapper;
  let expected;
  let mockFavorites;
  let mockUser; 

  beforeEach(() => {
    const mockMovie = {
      movie: {
        title: 'Movie Title',
        poster: 'Movie Poster',
        overview: 'Movie Overview',
        releaseData: 'Movie Release Date',
        rating: 'Movie Rating'
      }}
    const mockUser
    wrapper = shallow(<Card movie={mockMovie}/>);
  });

  it('Should render like snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('returns undefined upon invocation of handleFavorite if user is not logged in', () => {
    expected = undefined;

  })

  xit('invokes addFavorite upon invocation of handleFavorite if favorites exist', () => {
    
  })

  xit('invokes addFavorite upon invocation of handleFavorite if favorites dont exist', () => {
    
  })

  xit('invokes toggleFavorite upon invocation of handleFavorite', () => {
    
  })
});
