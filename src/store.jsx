import { createStore, applyMiddleware, compose } from 'redux'
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'

import rootReducer from './reducers'

import { defaultState as user } from './reducers/user'
import { defaultState as units } from './reducers/units'
import { defaultState as admin } from './reducers/admin'

const defaultState = {
  user,
  admin,
  units
}

export const history = createHistory()
const routingMiddleware = routerMiddleware(history)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  rootReducer, defaultState, composeEnhancers(
    applyMiddleware(routingMiddleware, thunk)
  )
)

export default store
