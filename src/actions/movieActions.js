export const toggleFavorite = (movieId) => ({
    type: 'TOGGLE_FAVORITE',
    movieId
});

export const setFavorites = (favoriteMovies) => ({
  type: 'SET_FAVORITES',
  favoriteMovies
});

export const setMovies = (movies) => ({
  type: 'SET_MOVIES',
  movies
});

export const clearFavorites = (favoriteMovies) => ({
	type: 'CLEAR_FAVORITES',
	favoriteMovies
})
