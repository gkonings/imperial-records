import React from 'react'

import Button from 'components/common/Button'
import styles from './Login.module.scss'

const Login = ({loggedIn, ...props}) => {
  return (<div className={styles.login}>
    {loggedIn
    ? <Button link onClick={props.logout}>Logout</Button>
    : <Button link onClick={props.login}>Login</Button>}
  </div>)
}

export default Login
