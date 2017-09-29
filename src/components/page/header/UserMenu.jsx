import React from 'react'

import Login from './Login'
import Portrait from './Portrait'

const UserMenu = ({admin, user, ...props}) => {
  console.log(user)

  return (
    <div>
      {user &&
      <Portrait user={user} />}
      {admin &&
        <Login
          loggedIn={user}
          login={props.login}
          logout={props.logout} />}
    </div>
  )
}

export default UserMenu
