import React from 'react'

import Button from 'components/common/Button'
import styles from './Header.module.scss'

const Header = ({user, ...props}) => {
  return (
    <div className={styles.header}>
      <h1 className={styles.h1}>Imperial Records</h1>
      {user.loggedInUser
      ? <Button onClick={props.logout}>Logout</Button>
      : <Button onClick={props.login}>Login</Button>}
    </div>
  )
}

export default Header
