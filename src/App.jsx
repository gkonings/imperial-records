import React, { Component } from 'react'
import {
  Route,
  Switch
} from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'

import { history } from 'config/store'
import ArmyBuilder from 'views/ArmyBuilder'
import Admin from 'views/AdminContainer'

class App extends Component {
  render () {
    return (
      <ConnectedRouter history={history} basename='/'>
        <Switch>
          <Route exact path='/' component={ArmyBuilder} />
          <Route path='/admin' component={Admin} />
        </Switch>
      </ConnectedRouter>

    )
  }
}

export default App
