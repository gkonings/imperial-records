import React from 'react'

import Button from 'components/common/Button'
import styles from './Header.module.scss'

const Header = (props) => {
  return (
    <div className={styles.header}>
      <h1 className={styles.h1}>Imperial Records</h1>
      <Button
        onClick={props.login}>Login</Button>
    </div>
  )
}

export default Header