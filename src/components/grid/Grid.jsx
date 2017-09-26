import React from 'react'

import styles from './grid.module.scss'

const Grid = ({children, admin, ...props}) => {
  return (
    <div
      className={admin ? styles.gridAdmin : styles.grid}
      {...props}>
      {children}
    </div>
  )
}

export default Grid
