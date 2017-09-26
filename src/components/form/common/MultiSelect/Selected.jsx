import React from 'react'

import styles from './MultiSelect.module.css'

const Selected = ({children, ...props}) => {
  return (
    <a
      className={styles.selected}
      onClick={props.onClick}>
      {children}
    </a>
  )
}

export default Selected
