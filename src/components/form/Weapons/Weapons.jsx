import React from 'react'

import Button from 'components/common/Button'
import ButtonGroup from 'components/common/ButtonGroup'

import InputContainer from 'components/common/form/input/Container'
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
            onClick={() => fields.push({})} >remove</Button>
        </ButtonGroup>
      </InputContainer>
    </div>
  )
}

export default Weapons
