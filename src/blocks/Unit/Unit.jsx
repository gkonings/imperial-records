import React from 'react'

import { Block } from 'components/common'
import Header from './Header'
import Stats from './Stats'
import Skills from './Skills'
import Weapons from './Weapons'
import Upgrades from './Upgrades'
import styles from './Unit.module.scss'

const Unit = ({unit}) => {
  return (
    <Block noPadding>
      <div className={styles.grid}>
        <div className={styles.header}>
          <Header unit={unit} />
        </div>
        <div className={styles.skills}>
          <Skills unit={unit} />
        </div>
        <div className={styles.stats}>
          <Stats unit={unit} />
        </div>
        <div className={styles.weapons}>
          <Weapons unit={unit} />
        </div>
        <div className={styles.upgrades}>
          <Upgrades unit={unit} />
        </div>
      </div>
    </Block>
  )
}

export default Unit
