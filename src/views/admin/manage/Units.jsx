import React from 'react'

import Form from 'components/unit/FormContainer'

import List from 'components/unit/ListContainer'
import Unit from 'components/unit/Card'
import Grid from 'components/layout/Grid'
import Content from 'components/layout/Content'

const ManageUnits = ({manageUnits, ...props}) => {
  return (
    <Grid type='editor'>
      <Content area='list'>
        <List
          livereload
          addNew={props.deselectUnit}
          selectUnit={props.selectUnit}
        />
      </Content>
      <Content area='content'>
        {manageUnits.selected && <Unit unit={manageUnits.selected} />}
        <Form unit={manageUnits.selected} />
      </Content>
    </Grid>
  )
}

export default ManageUnits
