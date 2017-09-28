import { auth } from 'config/database'
import * as userActions from 'constants/userActions'

const checkLogin = () => {
  return dispatch => {
    dispatch(requestedAction())
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(succesAction(user))
      }
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

export default checkLogin
