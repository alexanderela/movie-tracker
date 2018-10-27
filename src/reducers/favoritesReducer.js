const defaultState = []

export const favoritesReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'ADD_FAVORITE':
      if(!state.includes(action.movie)) {
      return [...state, action.movie]
     }
    case 'REMOVE_FAVORITE':
      return state.filter(movie => {
        return movie.id !== action.movie.id
      })
    case 'GET_FAVORITES':
      return state
    default: 
      return state;
  }
}
