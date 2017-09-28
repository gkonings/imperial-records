import React from 'react'

import styles from './Grid.module.scss'

const Grid = ({children, type, ...props}) => {
  return (
    <div
      className={styles[type]}
      {...props}>
      {children}
    </div>
  )
}

export default Grid
