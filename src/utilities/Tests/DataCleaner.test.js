import * as DataCleaner from '../DataCleaner';
import * as API from '../API'
jest.mock('../API');

describe('Data Cleaner', () => {
  describe('fetchMovies', () => {
    let url;

    beforeEach(() => {
      url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=26d5b93e45b773596adda2d2b99efa0f&language=en-US&page=1'
    });

    it('Should call fetchData with the correct URL', async () => {
      DataCleaner.fetchMovies()
      expect(API.fetchData).toHaveBeenCalledWith(url);
    });

    it('Should return a resolved array', async () => {
      const movies = await DataCleaner.fetchMovies();
      expect(movies).toEqual([]);
    });
  });

  describe('returnMovieData', () => {
    it('Should clean movie objects', async () => {
      const movies = [
        {
          title: 'A movie',
          poster_path: 'url',
          backdrop_path:'url',
          overview: '',
          release_date: '2018-05-13',
          vote_average: 5,
          id: 112432},
        {
          title: 'Another movie',
          poster_path: 'url',
          backdrop_path: 'url',
          overview: '',
          release_date: '2018-07-08',
          id: 11423
        }]
      const result = await DataCleaner.returnMovieData(movies);
      expect(result).toMatchSnapshot();
    });
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
