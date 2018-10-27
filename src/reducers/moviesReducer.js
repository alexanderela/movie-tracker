export const moviesReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_MOVIES':
      return [...state, ...action.movies];
		case 'TOGGLE_FAVORITE':
      return state.map(movie => {
      	if(movie.id === action.movieId) {
        	return {...movie, favorite: !movie.favorite}
      	} else {
      		return movie
      	}
      });
    default:
      return state;
  }
}
