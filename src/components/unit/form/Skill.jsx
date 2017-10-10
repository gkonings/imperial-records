import React from 'react'
import { Field } from 'redux-form'

import Button from 'components/common/Button'
import ButtonGroup from 'components/common/ButtonGroup'

import Input from 'components/common/form/Input'
import Textarea from 'components/common/form/Textarea'
import RichText from 'components/common/form/RichText'

const Skill = ({item, ...props}) => {
  // console.log(item)

  return (
    <div>
      <Field
        name={`${item}.name`}
        label='Skill name'
        required
        small
        component={Input} />
      <Field
        name={`${item}.text`}
        label='Skill text'
        small
        component={Textarea} />

      <Field withRef
        name={`${item}.rte`}
        label='RTE'
        component={RichText} />
      <Field
        name={`${item}.action`}
        label='is action'
        type='checkbox'
        small
        component={Input} />

      <ButtonGroup>
        <Button
          link
          color='danger'
          onClick={props.remove}>
           remove
        </Button>
      </ButtonGroup>
    </div>
  )
}

export default Skill
