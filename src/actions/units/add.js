import database from '../database'
import * as unitActions from '../../constants/unitActions'

const addUnit = (unit) => {
  return dispatch => {
    dispatch(requestedAction())
    return database.ref('/units/')
      .push(unit)
      .then(() => {
        dispatch(succesAction(unit))
      })
      .catch(error => {
        dispatch(errorAction(error))
      })
  }
}

const requestedAction = () => {
  return {
    type: unitActions.ADD_UNIT_REQUEST
  }
}

const succesAction = (payload) => {
  return {
    type: unitActions.ADD_UNIT_SUCCESS,
    payload
  }
}

const errorAction = (payload) => {
  console.log(payload)
  return {
    type: unitActions.ADD_UNIT_ERROR,
    payload
  }
}

export default addUnit
