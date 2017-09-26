import React from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field, FieldArray } from 'redux-form'

import { Button, ButtonGroup } from 'components/common'

import {
  Block } from '../../components'

import {
  Form,
  Input,
  Faction,
  Type,
  Defense,
  Result,
  Rank,
  UpgradeOptions,
  Skills,
  Weapons

} from '../../components/form'

const UnitForm = ({unit, ...props}) => {
  // const handleSubmit =

  return (
    <Block>
      <Form
        onSubmit={props.handleSubmit(unit ? props.updateUnit : props.addUnit)}>

        {unit
        ? <h2>Edit {unit.name}</h2>
        : <h2>Add new unit</h2>}

        <Field
          name='faction'
          label='Faction'
          required
          component={Faction} />

        <Field
          name='name'
          label='Name'
          required
          component={Input} />

        <Field
          name='subtitle'
          label='Subtitle'
          component={Input} />

        <Field
          name='unique'
          label='Unique Figure'
          type='checkbox'
          component={Input} />

        <Field
          name='points'
          label='Points'
          type='number'
          required
          component={Input} />

        <Field
          name='rank'
          label='Rank'
          required
          component={Rank} />

        <Field
          name='size'
          label='Size'
          type='number'
          required
          component={Input} />

        <Field
          name='type'
          label='Type'
          required
          component={Type} />

        <Field
          name='defense'
          label='Defense die'
          required
          component={Defense} />

        <Field
          name='hasArmor'
          label='has Armor'
          type='checkbox'
          component={Input} />

        <Field
          name='wounds'
          label='Wounds'
          type='number'
          component={Input} />

        <Field
          name='courage'
          label='Courage'
          type='number'
          component={Input} />

        <Field
          name='armor'
          label='Armor'
          type='number'
          component={Input} />

        <Field
          name='offensiveSurge'
          label='Offensive Surge'
          component={Result} />

        <Field
          name='defensiveSurge'
          label='Defensive Surge'
          component={Result} />

        <Field
          name='speed'
          label='Speed'
          type='number'
          component={Input} />

        <FieldArray
          name='skills'
          label='Skills'
          component={Skills} />

        <FieldArray
          name='weapons'
          label='Weapons'
          component={Weapons} />

        <Field
          name='options'
          label='Options'
          component={UpgradeOptions} />

        <ButtonGroup>
          {unit &&
          <Button
            value='Delete'
            link confirm
            confirmMessage={`Are you sure you want to delete ${unit.name}?`}
            onClick={() => { props.deleteUnit(unit) }}>
              Delete
          </Button>}

          {unit
          ? <Button value='Update' type='submit' color='primary'>Update</Button>
          : <Button value='Add' type='submit' color='primary'>Add</Button>}
        </ButtonGroup>

      </Form>
    </Block>
  )
}

const validate = (values) => {
  const errors = {}

  if (!values.faction || values.faction.length <= 0) {
    errors.faction = 'Please provide a faction'
  }

  if (!values.name || values.name.length <= 0) {
    errors.name = 'Please, provide a name'
  }

  if (!values.points || values.points <= 0) {
    errors.points = 'Please, provide the point cost'
  }

  return errors
}

const form = reduxForm({
  form: 'unitForm',
  validate,
  enableReinitialize: true
})(UnitForm)

const mapStateToProps = (state, ownProps) => {
  return {
    initialValues: ownProps.unit
  }
}

export default connect(mapStateToProps)(form)
