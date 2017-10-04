import React from 'react'

import Weapon from './weapons/Weapon'
import styles from './Weapons.module.scss'

const Weapons = ({unit: {weapons}}) => {
  return (
    <div className={styles.weapons}>
      {weapons && weapons.map((weapon, index) =>
        <Weapon key={index} weapon={weapon} />)}
    </div>
  )
}

export default Weapons
