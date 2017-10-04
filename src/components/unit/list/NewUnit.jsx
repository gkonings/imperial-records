import React from 'react'

import styles from './ListItem.module.scss'

const NewUnit = ({addNEw, ...props}) => {
  return (
    <li className={styles.listItem}>
      <a className={styles.addNew}
        onClick={(e) => { e.preventDefault(); props.addNew() }} >
        <div className={styles.icon} />
        <div className={styles.name}>
          New Unit
        </div>
        <div className={styles.points} />

      </a>
    </li>
  )
}

export default NewUnit
