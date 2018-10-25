import * as userActions from '../userActions';

describe('userActions', () => {
  describe('successfulLogin', () => {
    it('should have a type of SUCCESSFUL_LOGIN and the userData', () => {
      const mockUser = {
        email: 'tim@aol.com',
        password: 'password',
        name: 'Tim',
      }
      const expected = {
        type: 'SUCCESSFUL_LOGIN',
        user: {
          name: 'Tim',
          email: 'tim@aol.com',
        }
      }

      const result = userActions.successfulLogin(mockUser);
      expect(result).toEqual(expected);
    });
  });
});
