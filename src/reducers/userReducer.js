const defaultState = {
  id: null,
  name: null,
  email: null,
}
export const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'SUCCESSFUL_LOGIN':
      return action.user;
    default:
      return state;
  }
}
