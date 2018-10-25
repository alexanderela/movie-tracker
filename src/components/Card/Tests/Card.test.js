import React from 'react';
import { shallow } from 'enzyme';
import Card from '../';

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
});
