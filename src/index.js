import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
// import registerServiceWorker from './registerServiceWorker'
import 'normalize.css'

import AppContainer from './AppContainer'
import store from 'config/store'
import 'scss/typography.scss'

import App from './testing/app.jsx'

ReactDOM.render(
  <App />, document.getElementById('root'))

// ReactDOM.render(
//   <Provider store={store}>
//     <AppContainer />
//   </Provider>, document.getElementById('root'))
// registerServiceWorker()
