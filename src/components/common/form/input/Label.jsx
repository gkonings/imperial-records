import React from 'react'
import PropTypes from 'prop-types'

import styles from './Label.module.scss'

const Label = ({value, small, required}) => {
  return (
    <div className={small ? styles.labelSmall : styles.label}>
      {value}
      {required &&
      <span className={styles.requiredMarker}>*</span>}
    </div>
  )
}

Label.PropTypes = {
  value: PropTypes.string.isRequired,

  required: PropTypes.bool,
  small: PropTypes.bool
}

export default Label
