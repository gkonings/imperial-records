import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from './Menu.module.scss'

const Menu = ({items}) => {
  return (
    <ul className={styles.menu}>
      {items && items.length > 0 &&
      items.map((item, i) =>
        <li className={styles.menuItem}
          key={i}>
          <NavLink className={styles.link} to={item.path}>
            {item.name}
          </NavLink>
        </li>
      )}
    </ul>
  )
}

export default Menu
