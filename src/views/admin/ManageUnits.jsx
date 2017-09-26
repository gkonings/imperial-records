import React from 'react'

import { Header, UnitForm, Unit, Units } from '../../blocks'
import { Grid, Content } from '../../components/grid'

const ManageUnits = ({manageUnits, ...props}) => {
  return (
    <Grid admin>

      <Content area='header'>
        <Header />
      </Content>
      <Content area='list'>
        <Units
          livereload
          addNew={props.deselectUnit}
          selectUnit={props.selectUnit}
        />
      </Content>
      <Content area='preview'>
        {manageUnits.selected && <Unit unit={manageUnits.selected} />}
      </Content>
      <Content area='form'>
        <UnitForm unit={manageUnits.selected} />
      </Content>
    </Grid>
  )
}

export default ManageUnits
