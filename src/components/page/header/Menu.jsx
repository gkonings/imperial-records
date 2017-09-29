import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from './Menu.module.scss'

const Menu = ({items, location}) => {
  return (
    <ul className={styles.menu}>
      {items && items.length > 0 &&
      items.map((item, i) =>
        <li className={styles.menuItem}
          key={i}>
          <NavLink exact
            location={location}
            className={styles.link}
            activeClassName={styles.active}
            to={item.path}>
            {item.name}
          </NavLink>
        </li>
      )}
    </ul>
  )
}

export default Menu
