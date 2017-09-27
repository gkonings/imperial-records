import React from 'react'

import * as symbols from 'constants/symbols'
import Icon from 'components/common/Icon'
import styles from './Stats.module.scss'

const getTypeName = (type) => {
  switch (type) {
    case symbols.TYPE.TROOPER:
      return 'Trooper'

    case symbols.TYPE.GROUND_VEHICLE:
      return 'Ground Vehicle'

    case symbols.TYPE.REPULSOR_VEHICLE:
      return 'Repulsor Vehicle'

    default:
      return type
  }
}

const Stats = ({unit}) => {
  return (
    <div className={styles.stats}>
      <div className={styles.header}>
        <h5>{getTypeName(unit.type)}</h5>
      </div>
      <div className={styles.defense}>
        <div className={styles.die}>
          <Icon type={unit.defense} />
        </div>
        <div className={styles.defenseValues} >
          <div className={styles.defenseValue}>
            <div className={styles.icon}>
              <Icon type={symbols.STATS.WOUNDS} />
            </div>
            {unit.wounds || '-'}
          </div>
          {unit.hasArmor
          ? (<div className={styles.defenseValue}>
            <div className={styles.icon}>
              <Icon type={symbols.STATS.ARMOR} />
            </div>
            {unit.armor || '-'}
          </div>)
          : (<div className={styles.defenseValue}>
            <div className={styles.icon}>
              <Icon type={symbols.STATS.COURAGE} />
            </div>
            {unit.courage || '-'}
          </div>)}

        </div>
      </div>
      <div className={styles.surges}>
        <div className={styles.surge}>
          {unit.offensiveSurge &&
          <div>
            <Icon type={symbols.RESULTS.OFFENSIVE_SURGE} />
          :
          <Icon type={unit.offensiveSurge} />
          </div>
        }
        </div>

        <div className={styles.surge}>
          {unit.defensiveSurge &&
          <div>
            <Icon type={symbols.RESULTS.DEFENSIVE_SURGE} />
          :
          <Icon type={unit.defensiveSurge} />
          </div>
        }
        </div>

      </div>
    </div>
  )
}

export default Stats
