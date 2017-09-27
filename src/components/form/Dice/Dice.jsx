import React from 'react'

import * as symbols from 'constants/symbols'
import InputContainer from 'components/common/form/input/Container'

import MultiSelect from '../common/MultiSelect'

const options = [
  {
    key: 0,
    label: 'black',
    value: symbols.DICE.BLACK
  },
  {
    key: 1,
    label: 'red',
    value: symbols.DICE.RED
  },
  {
    key: 2,
    label: 'white',
    value: symbols.DICE.WHITE
  }
]

const Dice = ({input, meta, ...props}) => {
  return (
    <InputContainer {...props} meta={meta}>
      <MultiSelect {...input} {...props} options={options} />
    </InputContainer>
  )
}

export default Dice
