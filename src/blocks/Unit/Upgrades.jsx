import React from 'react'

import { Icon } from 'components/common'
import styles from './Upgrades.module.scss'

const Upgrades = ({unit: {options}}) => {
  return (
    <div className={styles.upgrades}>
      {options && options.map((upgrade, i) =>
        <div key={i} className={styles.upgrade}>
          <Icon type={upgrade} />
        </div>)}
    </div>
  )
}

export default Upgrades
