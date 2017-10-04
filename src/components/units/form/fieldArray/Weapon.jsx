import React from 'react'
import { Field } from 'redux-form'

import * as options from 'services/form/options'
import Button from 'components/common/Button'
import ButtonGroup from 'components/common/ButtonGroup'
import Input from 'components/common/form/Input'
import Textarea from 'components/common/form/Textarea'
import Dropdown from 'components/common/form/Dropdown'
import MultiSelect from 'components/common/form/MultiSelect'

const Weapon = ({item, ...props}) => {
  return (
    <div>
      <Field
        name={`${item}.name`}
        label='Weapon name'
        required
        small
        component={Input} />
      <Field
        name={`${item}.rangeFrom`}
        required
        label='Range from'
        small
        options={options.range}
        component={Dropdown} />
      <Field
        name={`${item}.rangeTo`}
        label='Range to'
        small
        options={options.range}
        component={Dropdown} />
      <Field
        name={`${item}.dice`}
        label='Dice'
        small
        options={options.dice}
        component={MultiSelect} />
      <Field
        name={`${item}.abilities`}
        label='Abilities'
        small
        component={Textarea} />

      <ButtonGroup>
        <Button
          link
          color='danger'
          onClick={props.remove} >remove</Button>
      </ButtonGroup>
    </div>
  )
}

export default Weapon
