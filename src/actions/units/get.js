import database from '../database'
import * as unitActions from '../../constants/unitActions'
import { toArray } from '../helpers/toArray'

const getUnits = (livereload) => {
  return livereload ? on() : once()
}

const once = () => {
  return dispatch => {
    dispatch(requestedAction())
    return database.ref('/units/')
      .once('value', snap => {
        const data = toArray(snap.val())
        dispatch(succesAction(data))
      })
      .catch(error => {
        dispatch(errorAction(error))
      })
  }
}

const on = () => {
  return dispatch => {
    dispatch(requestedAction())
    return database.ref('/units/')
      .on('value', snap => {
        const data = toArray(snap.val())
        dispatch(succesAction(data))
      })
  }
}

const requestedAction = () => {
  return {
    type: unitActions.GET_UNITS_REQUEST
  }
}

const succesAction = (payload) => {
  return {
    type: unitActions.GET_UNITS_SUCCESS,
    payload
  }
}

const errorAction = (payload) => {
  return {
    type: unitActions.GET_UNITS_ERROR,
    payload
  }
}

export default getUnits
