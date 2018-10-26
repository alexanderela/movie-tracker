export const successfulLogin = (user) => {
  const newUser = {...user};
  delete newUser.password
  return {
    type: 'SUCCESSFUL_LOGIN',
    user: newUser
  }
}

export const signOut = () => ({
  type: 'SIGN_OUT'
})

export const toggleFavorite = (id) => ({
  type: 'TOGGLE_FAVORITE',
  id
})

export const addFavorite = (id) => ({
	type: 'ADD_FAVORITE',
	id
})

export const setMovies = (movies) => ({
  type: 'SET_MOVIES',
  movies,
})