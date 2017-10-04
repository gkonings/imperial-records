import React from 'react'

import Icon from 'components/common/Icon'
import styles from './Weapons.module.scss'

const Weapon = ({weapon}) => {
  return (
    <div className={styles.weapon}>
      <h5>
        {weapon.name}
      </h5>
      <div className={styles.stats}>
        <div className={styles.range}>
          <Icon type={weapon.rangeFrom} />
          {weapon.rangeTo && <span>-</span>}
          {weapon.rangeTo && <Icon type={weapon.rangeTo} />}
        </div>
        <ul className={styles.dice} >
          {weapon.dice && weapon.dice.map((d, i) =>
          (<li key={i} className={styles.die}>
            <Icon type={d} /></li>))}
        </ul>
      </div>
      <div className={styles.abilities}>
        {weapon.abilities}
      </div>
    </div>
  )
}

export default Weapon
