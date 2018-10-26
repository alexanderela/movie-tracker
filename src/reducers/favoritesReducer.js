export const defaultState = []

export const favoritesReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'ADD_FAVORITE':

    case 'REMOVE_FAVORITE':
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

// {
//   "movie_id": "movie.id",
//   "user_id": "user.id",
//   "title": "movie.title",
//   "poster_path": "movie.poster",
//   "release_date": "movie.releaseDate"     
//   "vote_average": "movie.rating",
//   "overview": "movie.overview"
// }