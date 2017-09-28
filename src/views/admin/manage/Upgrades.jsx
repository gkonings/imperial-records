import React from 'react'

import Grid from 'components/layout/Grid'
import Content from 'components/layout/Content'

const ManageUnits = ({...props}) => {
  return (
    <Grid type='editor'>
      <Content area='list' />
      <Content area='content'>
        <h2>Upgrade imminent</h2>
      </Content>
    </Grid>
  )
}

export default ManageUnits
