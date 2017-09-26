import React from 'react'

import styles from './common.module.scss'

const Error = ({submitFailed, error}) => {
  return submitFailed && error
  ? <span className={styles.errorMessage}>{error}</span>
  : null
}

export default Error
