import React from 'react'

import { Button, ButtonGroup } from 'components/common'

import InputContainer from '../common/InputContainer'
import Weapon from './Weapon'
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
            value='remove'
            onClick={() => fields.push({})} />
        </ButtonGroup>
      </InputContainer>
    </div>
  )
}

export default Weapons
