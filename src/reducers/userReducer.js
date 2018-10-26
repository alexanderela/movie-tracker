const defaultState = {
  id: null,
  loggedIn: false
}
export const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SUCCESSFUL_LOGIN':
      return {...action.user, loggedIn: true}
    case 'SIGN_OUT':
      return defaultState;
    default:
      return state;
  }
}
