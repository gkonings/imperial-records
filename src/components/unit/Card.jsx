import React from 'react'

import Block from 'components/common/Block'
import Header from './card/Header'
import Stats from './card/Stats'
import Skills from './card/Skills'
import Weapons from './card/Weapons'
import Upgrades from './card/Upgrades'
import styles from './Card.module.scss'

const Unit = ({unit}) => {
  return (
    <Block>
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
