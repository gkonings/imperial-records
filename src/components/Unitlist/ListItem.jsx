import React from 'react'

import { Icon, Unique } from '../'
import styles from './UnitList.module.scss'

const ListItem = ({unit, ...props}) => {
  return (
    <li className={styles.listItem}>
      <a className={styles.unit}
        onClick={(e) => { e.preventDefault(); props.select() }}>
        <div className={styles.icon}>
          <Icon type={unit.faction} />
        </div>
        <div className={styles.name}>
          {unit.unique && <Unique />}
          {unit.name}
        </div>
        <div className={styles.points}>
          {unit.points}
        </div>

      </a>
    </li>
  )
}

export default ListItem
