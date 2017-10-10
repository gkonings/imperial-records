import React from 'react'
import {
  Route,
  Switch
} from 'react-router-dom'

import List from 'components/unit/ListContainer'
import Edit from './units/EditContainer'
import New from './units/New'
import Grid from 'components/layout/Grid'
import Content from 'components/layout/Content'

const ManageUnits = ({manageUnits, match, location, ...props}) => {
  return (
    <Grid type='editor'>
      <Content area='list'>
        <List
          livereload
          location={location}
          addNew={props.deselectUnit}
          selectUnit={props.selectUnit}
        />
      </Content>
      <Content area='content'>
        <Switch>
          <Route exact path={match.path} component={New} />
          <Route path={`${match.path}:id`} component={Edit} />
        </Switch>

      </Content>
    </Grid>
  )
}

export default ManageUnits
