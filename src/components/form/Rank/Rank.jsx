import React from 'react'

import * as symbols from 'constants/symbols'
import InputContainer from 'components/common/form/input/Container'

import Dropdown from '../common/Dropdown'

const Faction = ({input, meta, ...props}) => {
  const options = [
    {
      key: 0,
      label: 'Commander',
      value: symbols.RANK.COMMANDER
    },
    {
      key: 1,
      label: 'Trooper',
      value: symbols.RANK.TROOPER
    },
    {
      key: 2,
      label: 'Vehicle',
      value: symbols.RANK.VEHICLE
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

export default Faction
