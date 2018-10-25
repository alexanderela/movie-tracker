import * as DataCleaner from '../DataCleaner';

describe('Data Cleaner', () => {
  describe('fetchMovies', () => {
  });

  describe('returnMovieData', () => {
  });

  describe('formatReleaseDate', () => {
    it('Should format a release date', () => {
      const mockReleaseDate = '2018-10-03';
      const expected = '10/03/2018';
      const result = DataCleaner.formatReleaseDate(mockReleaseDate);
      expect(result).toBe(expected);
    });
  });
});
