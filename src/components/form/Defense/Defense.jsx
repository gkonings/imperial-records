import React from 'react'

import * as symbols from '../../../constants/symbols'
import InputContainer from '../common/InputContainer'
import Dropdown from '../common/Dropdown'

const Defense = ({input, meta, ...props}) => {
  const options = [
    {
      key: 0,
      label: 'White',
      value: symbols.DEFENSE.WHITE
    },
    {
      key: 1,
      label: 'Red',
      value: symbols.DEFENSE.RED
    }
  ]
  return (
    <InputContainer {...props} meta={meta}>
      <Dropdown
        options={options}
        {...input}
        {...props} />
    </InputContainer>
  )
}

export default Defense
