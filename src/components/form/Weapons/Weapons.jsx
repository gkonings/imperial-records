import React from 'react'

import InputContainer from '../common/InputContainer'
import Weapon from './Weapon'
import { ButtonGroup, Button } from '../../'
import styles from './Weapons.module.scss'

const Weapons = ({fields, meta, ...props}) => {
  return (
    <div className={styles.weapons}>
      <InputContainer {...props} meta={meta}>
        <ul>
          {fields.map((weapon, index) =>
            <Weapon
              key={index}
              weapon={weapon}
              remove={() => fields.remove(index)} />)}
        </ul>
        <ButtonGroup>
          <Button
            onClick={() => fields.push({})}>
         Add Weapon
         </Button>
        </ButtonGroup>
      </InputContainer>
    </div>
  )
}

export default Weapons
