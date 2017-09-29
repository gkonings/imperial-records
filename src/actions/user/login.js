import { auth, provider } from 'config/database'
import * as userActions from 'constants/userActions'
import { toUser } from 'services/firebase/toUser'

const login = () => {
  return dispatch => {
    dispatch(requestedAction())
    return auth.signInWithPopup(provider)
    .then((user) => {
      dispatch(succesAction(toUser(user)))
    })
    .catch((error) => {
      dispatch(errorAction(error))
    })
  }
}

const requestedAction = () => {
  return {
    type: userActions.LOGIN_REQUEST
  }
}

const succesAction = (payload) => {
  return {
    type: userActions.LOGIN_SUCCESS,
    payload
  }
}

const errorAction = (payload) => {
  return {
    type: userActions.LOGIN_ERROR,
    payload
  }
}

export default login
