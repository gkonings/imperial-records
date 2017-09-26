import React from 'react'
import * as symbols from '../../../constants/symbols'
import InputContainer from '../common/InputContainer'
import Dropdown from '../common/Dropdown'

const options = [
  {
    key: 0,
    label: 'Melee',
    value: symbols.RANGE.MELEE
  },
  {
    key: 1,
    label: '1',
    value: symbols.RANGE.RANGE1
  },
  {
    key: 2,
    label: '2',
    value: symbols.RANGE.RANGE2
  },
  {
    key: 3,
    label: '3',
    value: symbols.RANGE.RANGE3
  },
  {
    key: 4,
    label: '4',
    value: symbols.RANGE.RANGE4
  },
  {
    key: 5,
    label: '5',
    value: symbols.RANGE.RANGE5
  }
]

const Range = ({input, small, meta, ...props}) => {
  return (
    <InputContainer {...props} meta={meta} small={small}>
      <Dropdown
        options={options}
        {...input}
        {...props} />
    </InputContainer>
  )
}

export default Range
