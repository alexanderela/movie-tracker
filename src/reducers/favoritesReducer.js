export const defaultState = []

export const favoritesReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'TOGGLE_FAVORITE':
      console.log('state: ', action.movies)
      return action.movies.map(movie => {
        return movie.id === action.id ? {...movie, isFavorite: !movie.isFavorite} : movie
      });
    default: 
      return state;
  }
}