import React from 'react'

import Unique from 'components/common/Unique'
import styles from './Name.module.scss'

const Name = ({unit}) => {
  return (
    <header className={styles.name}>
      <h4 className={styles.title}>
        {unit.unique && <Unique />}
        {unit.name}
      </h4>
      <h6 className={styles.subtitle}>
        {unit.subtitle}
      </h6>
    </header>
  )
}

export default Name
