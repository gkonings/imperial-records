import React from 'react'

import Selected from './Selected'

const SelectedList = ({values, ...props}) => {
  return (
    <div>
      {values && values.length > 0 && values
          .map((value, i) =>
            <Selected
              key={i}
              onClick={() => props.removeFromList(i)}>
              {value}
            </Selected>)}
    </div>
  )
}

export default SelectedList
