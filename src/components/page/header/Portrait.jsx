import React from 'react'

import resizeUrl from 'services/images/resizeUrl'
import styles from './Portrait.module.scss'

const Portrait = ({user}) => {
  const background = {
    backgroundImage: `url('${resizeUrl(user.photoURL, 80)}')`
  }
  return (
    <div className={styles.portrait}
      style={background} />
  )
}

export default Portrait
