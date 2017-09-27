import React from 'react'

import { Button } from 'components/common'
import styles from './Header.module.scss'

const Header = (props) => {
  return (
    <div className={styles.header}>
      <h1 className={styles.h1}>Imperial Records</h1>
      <Button
        value='Login'
        onClick={props.login} />
    </div>
  )
}

export default Header
