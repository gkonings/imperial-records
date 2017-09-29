import { auth } from 'config/database'
import * as userActions from 'constants/userActions'
import { toUser } from 'services/firebase/toUser'

const checkLogin = () => {
  return dispatch => {
    dispatch(requestedAction())
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(succesAction(toUser(user)))
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
