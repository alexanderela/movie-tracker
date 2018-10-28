export const toggleFavorite = (movieId) => ({
    type: 'TOGGLE_FAVORITE',
    movieId
})

export const addFavorite = (movie) => ({
	type: 'ADD_FAVORITE',
  movie
})

export const removeFavorite = (movie) => ({
  type: 'REMOVE_FAVORITE',
  movie
})

export const getFavorites = (favoriteMovies) => ({
  type: 'GET_FAVORITES',
  favoriteMovies
})

export const setMovies = (movies) => ({
  type: 'SET_MOVIES',
  movies
})
