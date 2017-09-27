import React from 'react'

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

export default Label
