import React from 'react'

import * as menu from './menuitems'
import Menu from './Menu'
import UserMenu from './UserMenu'
import styles from './Header.module.scss'

const Header = ({user, admin, location, ...props}) => {
  return (
    <div className={styles.header}>
      <h1 className={styles.h1}>Imperial Records</h1>
      <div className={styles.usermenu}>
        <UserMenu
          admin={admin}
          user={user.loggedInUser}
          login={props.login}
          logout={props.logout} />
      </div>
      <div className={styles.menu}>
        <Menu
          location={location}
          items={admin ? menu.admin : menu.armybuilder} />
      </div>

    </div>
  )
}

export default Header
