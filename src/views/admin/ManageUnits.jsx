import React from 'react'

import Header from 'components/page/header'
import Form from 'components/units/form'

import { Unit, Units } from '../../blocks'
import Grid from '../../components/grid/Grid'
import Content from '../../components/grid/Content'

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
        <Form unit={manageUnits.selected} />
      </Content>
    </Grid>
  )
}

export default ManageUnits
