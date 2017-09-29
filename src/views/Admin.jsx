import React, { Component } from 'react'
import {
  Route,
  Switch
} from 'react-router-dom'

import Header from 'components/page/header/Container'
import Grid from 'components/layout/Grid'
import Content from 'components/layout/Content'
import NotLoggedIn from './admin/NotLoggedIn'

import Dashboard from './admin/Dashboard'
import Units from './admin/manage/UnitsContainer'
import Upgrades from './admin/manage/UpgradesContainer'

class Admin extends Component {
  render () {
    const {user, match} = this.props
    return (
      <Grid type={'admin'}>
        <Content area='header'>
          <Header admin />
        </Content>
        <Content area='main'>
          {user.loggedInUser
          ? <Switch>
            <Route exact path={match.path} component={Dashboard} />
            <Route path={`${match.path}/units/`} component={Units} />
            <Route path={`${match.path}/upgrades/`} component={Upgrades} />
          </Switch>
          : <NotLoggedIn />}
        </Content>
      </Grid>
    )
  }
}

export default Admin
