import React from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field, FieldArray } from 'redux-form'

import * as options from 'services/form/options'
import Button from 'components/common/Button'
import ButtonGroup from 'components/common/ButtonGroup'
import Block from 'components/common/Block'
import Input from 'components/common/form/Input'
import Dropdown from 'components/common/form/Dropdown'
import MultiSelect from 'components/common/form/MultiSelect'
import Array from 'components/common/form/FieldArray'

import Skill from './fieldArray/Skill'
import Weapon from './fieldArray/Weapon'

const UnitForm = ({unit, ...props}) => {
  return (
    <Block>
      <form
        onSubmit={props.handleSubmit(unit ? props.updateUnit : props.addUnit)}>

        {unit
        ? <h2>Edit {unit.name}</h2>
        : <h2>Add new unit</h2>}

        <Field
          name='faction'
          label='Faction'
          options={options.factions}
          required
          component={Dropdown} />

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
          options={options.rank}
          required
          component={Dropdown} />

        <Field
          name='size'
          label='Size'
          type='number'
          required
          component={Input} />

        <Field
          name='type'
          label='Type'
          options={options.types}
          required
          component={Dropdown} />

        <Field
          name='defense'
          label='Defense die'
          options={options.defense}
          required
          component={Dropdown} />

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
          options={options.result}
          component={Dropdown} />

        <Field
          name='defensiveSurge'
          label='Defensive Surge'
          options={options.result}
          component={Dropdown} />

        <Field
          name='speed'
          label='Speed'
          type='number'
          component={Input} />

        <FieldArray
          name='skills'
          label='Skills'
          itemComponent={Skill}
          component={Array} />

        <FieldArray
          name='weapons'
          label='Weapons'
          itemComponent={Weapon}
          component={Array} />

        <Field
          name='options'
          label='Options'
          options={options.upgrades}
          component={MultiSelect} />

        <ButtonGroup>
          {unit &&
          <Button
            link confirm
            confirmMessage={`Are you sure you want to delete ${unit.name}?`}
            onClick={() => { props.deleteUnit(unit) }}>Delete</Button>}

          {unit
          ? <Button
            type='submit'
            color='primary'>Update</Button>
          : <Button
            type='submit'
            color='primary'>Add</Button>}
        </ButtonGroup>

      </form>
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
