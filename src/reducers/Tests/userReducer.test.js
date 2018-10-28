import { userReducer } from '../userReducer';

describe('userReducer', () => {
  const defaultState = {
    id: null,
    loggedIn: false
  }

  it('Should return default state when no type given', () => {
    const newState = userReducer(undefined, {});
  });

  it('Should add user to state on SUCCESSFUL_LOGIN', () => {
    const mockAction = {
      type: 'SUCCESSFUL_LOGIN',
      user: {
        id: 1
      }
    }

    const expected = {
      id: 1,
      loggedIn: true
    }
    const newState = userReducer(undefined, mockAction);

    expect(newState).toEqual(expected);
  });

  it('Should remove user from state on SIGN_OUT', () => {
    const state = {
      id: 1,
      name: 'Tim',
      email: 'tim@aol.com',
      loggedIn: false
    }
    const mockAction = { type: 'SIGN_OUT' }
    const newState = userReducer(state, mockAction);
    expect(newState).toEqual(defaultState);
  });
});
