import React from 'react';
import { shallow } from 'enzyme';
import { Card, mapStateToProps, mapDispatchToProps } from '../';

describe('Card', () => {
  describe('Component', () => {
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
      wrapper = shallow(<Card movie={mockMovie}
        changeFavorites={jest.fn()}
        addToFavorites={jest.fn()}
        user={{}}/>);
    });

    it('Should render like snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('mapStateToProps', () => {
    it('Should return the user object from state', () => {
      const mockState = {
        user: { id: 1, loggedIn: true },
        movies: ['movie', 'movie']
      }
      const expected = { user: {id: 1, loggedIn: true }}
      const result = mapStateToProps(mockState);
      expect(result).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    beforeEach(() => {
      dispatch = jest.fn();
    });
  });
});
