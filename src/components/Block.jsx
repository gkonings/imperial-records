import React from 'react'

import styles from './Block.module.scss'
const Block = ({noPadding, ...props}) => {
  return (
    <div className={noPadding ? styles.blockNoPadding : styles.block}>
      {props.children}
    </div>
  )
}

export default Block
