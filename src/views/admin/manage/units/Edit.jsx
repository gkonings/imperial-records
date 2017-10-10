import React from 'react'

import Form from 'components/unit/FormContainer'
import Unit from 'components/unit/Card'

const Edit = ({unit}) => {
  return unit
  ? (<div>
    <Unit unit={unit} />
    <Form unit={unit} />
  </div>)
  : null
}

export default Edit
