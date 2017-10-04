import React from 'react'

import styles from './Block.module.scss'
const Block = ({padding, ...props}) => {
  return (
    <div className={padding ? styles.padding : styles.noPadding}>
      {props.children}
    </div>
  )
}

export default Block
