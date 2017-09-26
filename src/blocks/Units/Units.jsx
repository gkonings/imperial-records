import React from 'react'

import { Block, UnitList } from '../../components/'

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
