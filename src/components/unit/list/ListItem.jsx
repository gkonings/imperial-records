import React from 'react'

import Unique from 'components/common/Unique'
import Icon from 'components/common/Icon'
import styles from './ListItem.module.scss'

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
