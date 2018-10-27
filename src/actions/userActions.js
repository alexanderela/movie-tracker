export const successfulLogin = (user, favorites) => {
  const newUser = {...user};
  delete newUser.password
  return {
    type: 'SUCCESSFUL_LOGIN',
    user: newUser,
    favorites: favorites
  }
}

export const signOut = () => ({
  type: 'SIGN_OUT'
})

export const toggleFavorite = (id) => ({
  type: 'TOGGLE_FAVORITE',
  id
})

export const addFavorite = (movie) => ({
	type: 'ADD_FAVORITE',
  movie
})

export const removeFavorite = (movie) => ({
  type: 'REMOVE_FAVORITE',
  movie
})

export const getFavorites = (id) => ({
  type: 'GET_FAVORITES',
  id
})

export const setMovies = (movies) => ({
  type: 'SET_MOVIES',
  movies
})