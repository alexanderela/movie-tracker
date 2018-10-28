export const successfulLogin = (user) => {
  const newUser = {...user};
  delete newUser.password
  return {
    type: 'SUCCESSFUL_LOGIN',
    user: newUser,
  }
}

export const signOut = () => ({
  type: 'SIGN_OUT'
})

export const signIn = () => ({
  type: 'SIGN_IN'
})
