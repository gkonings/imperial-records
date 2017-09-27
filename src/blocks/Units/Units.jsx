import React from 'react'

import Block from 'components/common/Block'
import { UnitList } from '../../components/'

const Units = ({units, addNew, ...props}) => {
  return (
    <Block noPadding>
      <UnitList
        {...props}
        units={units}
        addNew={addNew} />
    </Block>
  )
}

export default Units
