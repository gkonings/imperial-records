import React from 'react'

import Button from 'components/common/Button'

const Login = ({loggedIn, ...props}) => {
  return loggedIn
    ? <Button onClick={props.logout}>Logout</Button>
    : <Button onClick={props.login}>Login</Button>
}

export default Login
