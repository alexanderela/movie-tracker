import * as API from '../API';

describe('API', () => {
  describe ('fetchData', () => {
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        json: () => Promise.resolve({data: 'data here'})
      }));
    });

    it('Should call fetch with the given url', () => {
      const url = 'google.com';
      API.fetchData(url);
      expect(window.fetch).toHaveBeenCalledWith(url);
    });

    it('Should return json\'d response from fetch', async () => {
      const url = 'google.com';
      const expected = {data: 'data here'}
      const response = await API.fetchData(url)
      expect(response).toEqual(expected);
    });
  });

  describe('loginUser', () => {
    let mockUser;
    beforeEach(() => {
      mockUser = {email: 'tim@aol.com', password: 'password'};
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        json: () => Promise.resolve(
          {data: {email: 'tim@aol.com', password: 'password'}})
      }))
    });

    it('should call fetch on path /api/users', () => {
      API.loginUser(mockUser);
      expect(window.fetch.mock.calls[0][0]).toBe('http://localhost:3000/api/users');
    });

    it('should pass an options object with the stringified user data to fetch', () => {
      const options = {
          method: 'POST',
          body: JSON.stringify(mockUser),
          headers:{
            'Content-Type': 'application/json'
          }
      }
      API.loginUser(mockUser);
      expect(window.fetch.mock.calls[0][1]).toEqual(options)
    });

    it('should return the json\'d user data from response', async () => {
      const response = await API.loginUser(mockUser);
      const expected = {email: 'tim@aol.com', password: 'password'}
      expect(response).toEqual(expected);
    });
  });

  describe('createUser', () => {
    beforeEach(() => {
      window.fetch = jest.fn();
    });

    it('Should call fetch with the correct arguments', () => {
      const url = 'http://localhost:3000/api/users/new';
      const mockUser = {name: 'Tim', email: 'tim@aol.com', password: 'password'}
      const mockOptions = {
        method: 'POST',
        body: JSON.stringify(mockUser),
        headers: {
          'Content-Type': 'application/json'
        }
      }
      API.createUser(mockUser);
      expect(window.fetch).toHaveBeenCalledWith(url, mockOptions);
    });
  });

  describe('addFavorite', () => {
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        json: () => Promise.resolve({})
      }));
    });

    it('Should make a post request with the correct arguments', () => {
      const url = 'http://localhost:3000/api/users/favorites/new'
      const mockMovie = {
        id: 1,
        title: 'Movie',
        poster: 'Poster path',
        releaseDate: '1/1/19',
        rating: 10,
        overview: 'A summary'
      }
      const mockUser = { id: 1 };
      const mockOptions = {
        method: 'POST',
        body: JSON.stringify({
          movie_id: mockMovie.id,
          user_id: mockUser.id,
          title: mockMovie.title,
          poster_path: mockMovie.poster,
          release_date: mockMovie.releaseDate,
          vote_average: mockMovie.rating,
          overview: mockMovie.overview
        }),
        headers: {
          'Content-Type': 'application/json'
      }}
      API.addFavorite(mockMovie, mockUser);
      expect(window.fetch).toHaveBeenCalledWith(url, mockOptions);
    });
  });


  describe('removeFavorite', () => {
    beforeEach(() => {
      window.fetch = jest.fn();
    });

    it('Should make a delete request with the correct arguments', () => {
      const mockUser = { id: 1 }
      const mockMovie = { id: 1 }
      const url = `http://localhost:3000/api/users/${mockUser.id}/favorites/${mockMovie.id}`;
      const mockOptions = {
        method: 'DELETE',
        body: JSON.stringify({
          movie_id: mockMovie.id,
          user_id: mockUser.id
        }),
        headers: {
          'Content-Type': 'application/json'
        }}
      API.removeFavorite(mockMovie, mockUser);
      expect(window.fetch).toHaveBeenCalledWith(url, mockOptions);
    });
  });

  describe('getFavorites', () => {
    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        json: () => Promise.resolve({
          data: ['Favorites', 'Array']
        })
      }));
    });

    it('Should call fetch with correct arguments', () => {
      const mockUser = { id: 1 };
      const url = `http://localhost:3000/api/users/${mockUser.id}/favorites`;
      API.getFavorites(mockUser);
      expect(window.fetch).toHaveBeenCalledWith(url);
    });

    it('Should resolve the fetch and return the data key from response', async () => {
      const mockUser = { id: 1 };
      const url = `http://localhost:3000/api/users/${mockUser.id}/favorites`;
      const expected = ['Favorites', 'Array'];
      const result =  await API.getFavorites(url);
      expect(result).toEqual(expected);
    });
  });
});
