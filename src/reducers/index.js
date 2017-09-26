import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import { reducer as form } from 'redux-form'

import user from './user'
import units from './units'
import admin from './admin'

const rootReducer = combineReducers({
  user,
  admin,
  units,

  form,
  router
})

export default rootReducer
