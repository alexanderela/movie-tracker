/* eslint-disable */

import { moviesReducer } from '../moviesReducer';

describe('moviesReducer', () => {
	const defaultState = [];

	it('Should return default state when no type is given', () => {
		const newState = moviesReducer(undefined, {});

		expect(newState).toEqual(defaultState);
	});

	it('Should set movies as new state', () => {
		const mockMovies = [{title: 'A movie'}, {title: 'Another movie'}];
		const mockAction = {
			type: 'SET_MOVIES',
			movies: mockMovies
		};
		const newState = moviesReducer([], mockAction);

		expect(newState).toEqual(mockMovies);
	});

	it('Should toggle a favorite on a movie in the state', () => {
		const mockMovies = [{id: 1, favorite: false}, {id: 2, favorite: false}];
		const mockAction = {
			type: 'TOGGLE_FAVORITE',
			movieId: 1
		};
		const expected = [{id: 1, favorite: true}, {id: 2, favorite: false}];
		const newState = moviesReducer(mockMovies, mockAction);

		expect(newState).toEqual(expected);

	});

	it('Should set favorites', () => {
		const mockMovies = [
			{id: 1, favorite: false},
			{id: 2, favorite: false},
			{ id:3, favorite:false}];
		const mockFavorites = [
			{movie_id: 1},
			{movie_id: 3}];
		const mockAction = {
			type: 'SET_FAVORITES',
			favoriteMovies: mockFavorites
		};
		const expected = [
			{id: 1, favorite: true},
			{id: 2, favorite: false},
			{id: 3, favorite: true},
		];
		const newState = moviesReducer(mockMovies, mockAction);

		expect(newState).toEqual(expected);
	});
});
