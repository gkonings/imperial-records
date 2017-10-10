import React from 'react'
import { NavLink } from 'react-router-dom'

import Unique from 'components/common/Unique'
import Icon from 'components/common/Icon'
import styles from './ListItem.module.scss'

const ListItem = ({unit, location, ...props}) => {
  return (
    <li className={styles.listItem}>
      <NavLink exact
        location={location}
        className={styles.unit}
        to={'/admin/units/' + unit.key}>
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
      </NavLink>

    </li>
  )
}

export default ListItem
