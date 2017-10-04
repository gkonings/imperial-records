import React from 'react'

import Weapon from './Weapon'
import styles from './Weapons.module.scss'

const Skills = ({unit: {weapons}}) => {
  return (
    <div className={styles.weapons}>
      {weapons && weapons.map((weapon, index) =>
        <Weapon key={index} weapon={weapon} />)}
    </div>
  )
}

export default Skills
