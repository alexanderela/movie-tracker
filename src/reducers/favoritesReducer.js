const defaultState = []

export const favoritesReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'ADD_FAVORITE':
      if(!state.includes(action.id)) {
      return [...state, action.id]
     }
    case 'REMOVE_FAVORITE':
      return state.filter(id => {
        return id !== action.id
      })
    case 'GET_FAVORITES':
      return state
    default: 
      return state;
  }
}
