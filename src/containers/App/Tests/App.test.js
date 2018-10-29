import React from 'react';
import { shallow } from 'enzyme';
import { App, mapStateToProps, mapDispatchToProps } from '../';

describe('App', () => {
  describe('Component', () => {
    const movies = [
      { title: 'Movie 1', favorite: true },
      { title: 'Movie 2', favorite: false },
      { title: 'Movie 3', favorite: false },
      { title: 'Movie 4', favorite: true }
    ];
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<App
        movies={movies}
        user={{id: 1, loggedIn: true}}/>);
    });

    it('Should render like snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('Should filter out favorited movies', () => {
      const expected = [
        { title: 'Movie 1', favorite: true },
        { title: 'Movie 4', favorite: true }
      ];
      const favorites = wrapper.instance().filterFavorites();
      expect(favorites).toEqual(expected);
    });
  });

  describe('mapStateToProps', () => {
    it('Should create the correct props object', () => {
      const mockState = {
        user: { id: null, loggedIn: false},
        movies: []
      }
      const newProps = mapStateToProps(mockState);
      expect(newProps).toEqual(mockState);
    });
  });

  describe('mapDispatchToProps', () => {
    let dispatch;
    beforeEach(() => {
      dispatch = jest.fn();
    });

    it('Should map a key of setMovies', () => {
      const dispatchProps = mapDispatchToProps(dispatch);
      expect(dispatchProps.setMovies).toBeDefined();
    });

    it('setMovies should call dispatch', () => {
      const dispatchProps = mapDispatchToProps(dispatch);
      const expected = {
        type: 'SET_MOVIES',
        movies: []
      }
      dispatchProps.setMovies([]);
      expect(dispatch).toHaveBeenCalledWith(expected);
    });
  });
});
