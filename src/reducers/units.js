import * as unitActions from '../constants/unitActions'

export const defaultState = {

}

const reducer = (state = {}, {type, payload}) => {
  switch (type) {
    case unitActions.GET_UNITS_REQUEST:
      return {
        ...state,
        loading: true
      }

    case unitActions.GET_UNITS_ERROR:
      return {
        ...state,
        loading: false,
        list: undefined,
        getError: payload
      }

    case unitActions.GET_UNITS_SUCCESS:
      return {
        ...state,
        list: payload,
        loading: false,
        getError: undefined
      }

    case unitActions.ADD_UNIT_REQUEST:
      return {
        ...state,
        adding: true
      }

    case unitActions.ADD_UNIT_ERROR:
      return {
        ...state,
        adding: false
      }

    case unitActions.ADD_UNIT_SUCCESS:
      return {
        ...state,
        adding: false
      }

    case unitActions.UPDATE_UNIT_REQUEST:
      return {
        ...state,
        updating: true
      }

    case unitActions.UPDATE_UNIT_ERROR:
      return {
        ...state,
        updating: false
      }

    case unitActions.UPDATE_UNIT_SUCCESS:
      return {
        ...state,
        updating: false
      }

    default:
      return state
  }
}

export default reducer
