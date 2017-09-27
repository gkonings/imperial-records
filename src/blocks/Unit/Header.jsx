import React from 'react'

import * as symbols from 'constants/symbols'
import { Unique } from 'components/common'

import { Icon } from '../../components'
import styles from './Header.module.scss'

const Header = ({unit}) => {
  return (
    <div className={styles.header}>
      <div className={styles.faction}>
        <Icon type={unit.faction} />
      </div>
      <div className={styles.name}>
        <header>
          <h4>
            {unit.unique && <Unique />}
            {unit.name}
          </h4>
          <h6>
            {unit.subtitle}
          </h6>
        </header>
      </div>
      <div className={unit.faction === symbols.FACTION.EMPIRE ? styles.rankSizeEmpire : styles.rankSizeRebel}>
        <div className={styles.rank}>
          <Icon type={unit.rank} />
        </div>
        <div className={styles.size}>
          {unit.size}
        </div>
      </div>
      <div className={styles.points}>
        {unit.points}
      </div>
    </div>
  )
}

export default Header
