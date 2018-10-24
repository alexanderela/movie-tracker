import * as API from './API';

describe('loginUser', () => {
  let mockUser;
  beforeEach(() => {
    mockUser = {email: 'tim@aol.com', password: 'password'};
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve({email: 'tim@aol.com', password: 'password'})
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
