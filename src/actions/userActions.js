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

export const signIn = () => ({
  type: 'SIGN_IN'
})
