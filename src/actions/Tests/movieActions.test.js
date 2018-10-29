import { toggleFavorite, setFavorites, setMovies } from '../movieActions';

describe('movieActions', () => {
  describe('toggleFavorite', () => {
    it('Should have a type of TOGGLE_FAVORITE', () => {
      const id = 100;
      const expected = {
        type: 'TOGGLE_FAVORITE',
        movieId: 100
      }
      const result = toggleFavorite(id);

      expect(result).toEqual(expected);
    });
  });

  describe('setFavorites', () => {
    it('Should have a type of SET_FAVORITES', () => {
      const favoriteMovies = [{title: 'A movie'}, {title: 'Another movie'}];
      const expected = {
        type: 'SET_FAVORITES',
        favoriteMovies
      }
      const result = setFavorites(favoriteMovies);

      expect(result).toEqual(expected);
    });
  });

  describe('setMovies', () => {
    it('Should have a type of SET_MOVIES', () => {
      const movies = [{title: 'A movie'}, {title: 'Another movie'}];
      const expected = {
        type: 'SET_MOVIES',
        movies
      }
      const result = setMovies(movies);

      expect(result).toEqual(expected);
    });
  });
});
