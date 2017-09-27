import React from 'react'

import * as symbols from 'constants/symbols'
import InputContainer from 'components/common/form/input/Container'

import Dropdown from '../common/Dropdown'

const Faction = ({input, meta, ...props}) => {
  const options = [
    {
      key: 0,
      label: 'Empire',
      value: symbols.FACTION.EMPIRE
    },
    {
      key: 1,
      label: 'Rebel',
      value: symbols.FACTION.REBEL
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
