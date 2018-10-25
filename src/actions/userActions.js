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

export const toggleFavorite = (id, movies) => ({
  type: 'TOGGLE_FAVORITE',
  id,
  movies,
})

export const setMovies = (movies) => ({
  type: 'SET_MOVIES',
  movies,
})