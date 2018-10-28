export const moviesReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_MOVIES':
      console.log(action.movies)
      return [...state, ...action.movies];
		case 'TOGGLE_FAVORITE':
      return state.map(movie => {
      	if(movie.id === action.movieId) {
        	return {...movie, favorite: !movie.favorite}
      	} else {
      		return movie
      	}
      });
    case 'SET_FAVORITES':
      const favoriteIds = action.favoriteMovies.map(movie => movie.movie_id);
      return state.map(movie => {
        if (favoriteIds.includes(movie.id)) {
          return { ...movie, favorite: true };
        }
        return movie;
      });
    case 'CLEAR_FAVORITES':
      return state.map(movie => {
        return {...movie, favorite: false}
      });
    default:
      return state;
  }
}
