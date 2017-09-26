import database from '../database'
import * as unitActions from '../../constants/unitActions'

const updateUnit = ({key, ...unit}) => {
  console.log('update')
  console.log(unit)
  return dispatch => {
    dispatch(requestedAction())
    return database.ref(`/units/`)
      .child(key)
      .update(unit)
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
    type: unitActions.UPDATE_UNIT_REQUEST
  }
}

const succesAction = (payload) => {
  return {
    type: unitActions.UPDATE_UNIT_SUCCESS,
    payload
  }
}

const errorAction = (payload) => {
  console.log(payload)
  return {
    type: unitActions.UPDATE_UNIT_ERROR,
    payload
  }
}

export default updateUnit
