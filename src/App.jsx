import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import ArmyBuilder from 'views/ArmyBuilder'
import Admin from 'views/AdminContainer'

class App extends Component {
  render () {
    return (
      <Router path='/'>
        <Switch>
          <Route exact path='/' component={ArmyBuilder} />
          <Route path='/admin' component={Admin} />
        </Switch>
      </Router>

    )
  }
}

export default App
