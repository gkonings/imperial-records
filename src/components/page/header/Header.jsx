import React from 'react'

import * as menu from './menuitems'
import Login from './Login'
import Menu from './Menu'
import styles from './Header.module.scss'

const Header = ({user, admin, ...props}) => {
  return (
    <div className={styles.header}>
      <h1 className={styles.h1}>Imperial Records</h1>
      <div className={styles.usermenu}>
        {admin &&
        <Login
          loggedIn={user.loggedInUser}
          login={props.login}
          logout={props.logout} />}
      </div>
      <div className={styles.menu}>
        <Menu items={admin ? menu.admin : menu.armybuilder} />
      </div>

    </div>
  )
}

export default Header
