import React from 'react'

import styles from './Portrait.module.scss'

const Portrait = ({user}) => {
  console.log(user)
  const background = {
    backgroundImage: `url('${user.photoURL}')`
  }
  return (
    <div className={styles.portrait}
      style={background} />
  )
}

export default Portrait
