import * as adminActions from '../../constants/adminActions'

export const selectUnit = (unit) => {
  return {
    type: adminActions.SELECT_UNIT,
    payload: unit
  }
}

export const deselectUnit = () => {
  return {
    type: adminActions.DESELECT_UNIT
  }
}
