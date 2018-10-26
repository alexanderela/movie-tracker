export const defaultState = []

export const favoritesReducer = (state = defaultState, action) => {
  switch(action.type) {
    // case 'TOGGLE_FAVORITE':
    //   const allMovies = action.movies.map(movie => {
    //   	if(movie.id === action.id) {
    //     	return {...movie, isFavorite: !movie.isFavorite}
    //   	} else {
    //   		return movie
    //   	}
    //   });
    //   	return allMovies.filter(movie => {
    //   		return movie.id === action.id
    //   	})
    default: 
      return state;
  }
}