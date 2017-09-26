import { auth } from 'config/database'
import * as userActions from 'constants/userActions'

const logout = () => {
  return dispatch => {
    dispatch(requestedAction())
    return auth.signOut()
    .then(() => {
      dispatch(succesAction())
    })
    .catch((error) => {
      dispatch(errorAction(error))
    })
  }
}

const requestedAction = () => {
  return {
    type: userActions.LOGOUT_REQUEST
  }
}

const succesAction = (payload) => {
  return {
    type: userActions.LOGOUT_SUCCESS,
    payload
  }
}

const errorAction = (payload) => {
  return {
    type: userActions.LOGOUT_ERROR,
    payload
  }
}

export default logout
