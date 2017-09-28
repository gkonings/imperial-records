import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Header from 'components/page/header/Container'
import Grid from 'components/layout/Grid'
import Content from 'components/layout/Content'

import Dashboard from './admin/Dashboard'
import Units from './admin/manage/UnitsContainer'
import Upgrades from './admin/manage/UpgradesContainer'

const Admin = ({user}) => {
  return (
    <Grid type={'admin'}>
      <Content area='header'>
        <Header admin />
      </Content>
      <Content area='main'>
        {user.loggedInUser
        ? <Router >
          <Switch>
            <Route exact path='/admin/' component={Dashboard} />
            <Route exact path='/admin/units/' component={Units} />
            <Route exact path='/admin/upgrades/' component={Upgrades} />
          </Switch>
        </Router>
        : null}
      </Content>
    </Grid>
  )
}

export default Admin
