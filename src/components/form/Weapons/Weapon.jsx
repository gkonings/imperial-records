import React from 'react'
import { Field } from 'redux-form'

import { Button, ButtonGroup } from 'components/common'

import { Input, Dice, Range, Textarea } from '../'

import styles from './Weapons.module.scss'

const Weapon = ({weapon, ...props}) => {
  return (
    <li className={styles.weapon}>
      <Field
        name={`${weapon}.name`}
        label='Weapon name'
        required
        small
        component={Input} />
      <Field
        name={`${weapon}.rangeFrom`}
        required
        label='Range from'
        small
        component={Range} />
      <Field
        name={`${weapon}.rangeTo`}
        label='Range to'
        small
        component={Range} />
      <Field
        name={`${weapon}.dice`}
        label='Dice'
        small
        component={Dice} />
      <Field
        name={`${weapon}.abilities`}
        label='Abilities'
        small
        component={Textarea} />

      <ButtonGroup>
        <Button
          link
          color='danger'
          onClick={props.remove} >remove</Button>
      </ButtonGroup>
    </li>
  )
}

export default Weapon
