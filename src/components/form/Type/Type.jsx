import React from 'react'
import * as symbols from 'constants/symbols'
import InputContainer from 'components/common/form/input/Container'

import Dropdown from '../common/Dropdown'

const options = [
  {
    key: 0,
    label: 'Trooper',
    value: symbols.TYPE.TROOPER
  },
  {
    key: 1,
    label: 'Ground Vehicle',
    value: symbols.TYPE.GROUND_VEHICLE
  },
  {
    key: 2,
    label: 'Repulsor Vehicle',
    value: symbols.TYPE.REPULSOR_VEHICLE
  }
]

const Type = ({input, small, meta, ...props}) => {
  return (
    <InputContainer {...props} meta={meta} small={small}>
      <Dropdown
        options={options}
        {...input}
        {...props} />
    </InputContainer>
  )
}

export default Type
