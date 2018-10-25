import * as API from './API';

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
    })
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
});
