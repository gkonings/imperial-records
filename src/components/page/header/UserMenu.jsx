import React from 'react'

import Login from './Login'
import Portrait from './Portrait'
import styles from './UserMenu.module.scss'

const UserMenu = ({admin, user, ...props}) => {
  return (
    <div className={styles.userMenu}>

      <div className={styles.login}>
        {admin &&
        <Login
          loggedIn={user}
          login={props.login}
          logout={props.logout} />}
      </div>
      <div className={styles.portrait}>
        {user &&
        <Portrait user={user} />}
      </div>
    </div>
  )
}

export default UserMenu
