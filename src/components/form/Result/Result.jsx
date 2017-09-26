import React from 'react'

import * as symbols from '../../../constants/symbols'
import InputContainer from '../common/InputContainer'
import Dropdown from '../common/Dropdown'

const Defense = ({input, meta, ...props}) => {
  const options = [
    {
      key: 0,
      label: 'Hit',
      value: symbols.RESULTS.HIT
    },
    {
      key: 1,
      label: 'Critical hit',
      value: symbols.RESULTS.CRITICAL
    },
    {
      key: 2,
      label: 'Block',
      value: symbols.RESULTS.BLOCK
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
