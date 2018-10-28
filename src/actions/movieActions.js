export const toggleFavorite = (movieId) => ({
    type: 'TOGGLE_FAVORITE',
    movieId
})

export const getFavorites = (favoriteMovies) => ({
  type: 'GET_FAVORITES',
  favoriteMovies
})

export const setMovies = (movies) => ({
  type: 'SET_MOVIES',
  movies
})
