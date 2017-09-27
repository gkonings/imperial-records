import React from 'react'
import { Field } from 'redux-form'

import { Button, ButtonGroup } from 'components/common'

import Input from '../Input'
import Textarea from '../Textarea'
import styles from './Skills.module.scss'

const Skill = ({skill, ...props}) => {
  return (
    <li className={styles.skill}>
      <Field
        name={`${skill}.name`}
        label='Skill name'
        required
        small
        component={Input} />
      <Field
        name={`${skill}.text`}
        label='Skill text'
        small
        component={Textarea} />
      <Field
        name={`${skill}.action`}
        label='is action'
        type='checkbox'
        small
        component={Input} />

      <ButtonGroup>
        <Button
          value='remove'
          link
          color='danger'
          onClick={props.remove}>
           remove
        </Button>
      </ButtonGroup>
    </li>
  )
}

export default Skill