import React from 'react'
import PropTypes from 'prop-types'

import styles from './Error.module.scss'

const Error = ({submitFailed, error}) => {
  return submitFailed && error
  ? <span className={styles.errorMessage}>{error}</span>
  : null
}

Error.PropTypes = {
  error: PropTypes.string.isRequired,
  submitFailed: PropTypes.bool
}

export default Error
