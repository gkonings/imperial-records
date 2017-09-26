import React from 'react'

import styles from './Button.module.scss'

const ButtonGroup = (props) => {
  return (
    <div className={styles.group}>
      {props.children}
    </div>
  )
}

export default ButtonGroup
