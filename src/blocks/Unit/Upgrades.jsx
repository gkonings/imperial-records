import React from 'react'

import styles from './Upgrades.module.scss'
import { Icon } from '../../components'

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
