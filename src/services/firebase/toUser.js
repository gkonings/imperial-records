const toUser = (firebaseUser) => {
  const storeUser = {}
  const userProperties = [
    'displayName',
    'email',
    'emailVerified',
    'isAnonymous',
    'photoURL',
    'providerData',
    'providerId',
    'refreshToken',
    'uid',
    'isAdmin'
  ]

  userProperties.forEach((prop) => {
    if (prop in firebaseUser) {
      storeUser[prop] = firebaseUser[prop]
    }
  })

  return storeUser
}

export default toUser
