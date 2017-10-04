import React from 'react'

import * as symbols from 'constants/symbols'
import Icon from 'components/common/Icon'
import Name from './header/Name'

import styles from './Header.module.scss'

const Header = ({unit}) => {
  return (
    <div className={styles.header}>
      <div className={styles.faction}>
        <Icon type={unit.faction} />
      </div>
      <div className={styles.name}>
        <Name unit={unit} />
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
