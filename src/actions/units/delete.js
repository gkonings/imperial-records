import database from '../database'
import * as unitActions from '../../constants/unitActions'

const deleteUnit = ({key, ...unit}) => {
  return dispatch => {
    dispatch(requestedAction())
    return database.ref(`/units/`)
    .child(key)
    .remove()
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
    type: unitActions.DELETE_UNIT_REQUEST
  }
}

const succesAction = (payload) => {
  return {
    type: unitActions.DELETE_UNIT_SUCCESS,
    payload
  }
}

const errorAction = (payload) => {
  console.log(payload)
  return {
    type: unitActions.DELETE_UNIT_ERROR,
    payload
  }
}

export default deleteUnit
