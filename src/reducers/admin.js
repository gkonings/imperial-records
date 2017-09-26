import * as adminActions from '../constants/adminActions'

export const defaultState = {
  manageUnits: {}
}

const reducer = (state = {}, {type, payload}) => {
  switch (type) {
    case adminActions.SELECT_UNIT:
      return {
        ...state,
        manageUnits: {
          ...state.manageUnits,
          selected: payload
        }
      }

    case adminActions.DESELECT_UNIT:
      return {
        ...state,
        manageUnits: {
          ...state.manageUnits,
          selected: undefined
        }
      }

    default:
      return state
  }
}

export default reducer
