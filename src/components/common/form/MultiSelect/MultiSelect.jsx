import React, { Component } from 'react'
import PropTypes from 'prop-types'

import InputContainer from 'components/common/form/input/Container'
import Dropdown from 'components/common/form/Dropdown'
import SelectedList from './SelectedList'

class Multiselect extends Component {
  addToList = ({target}) => {
    target.value && this.props.input.onChange(
      [...this.props.input.value, target.value]
    )
  }

  removeFromList = (index) => {
    this.props.input.onChange(this.props.input.value
      .filter((v, i) => i !== index))
  }

  render () {
    const {input, meta, options, ...props} = this.props

    return (
      <InputContainer {...props} meta={meta}>
        <SelectedList
          values={input.value}
          removeFromList={this.removeFromList} />
        <Dropdown hideContainer
          name={input.name}
          value=''
          label={input.label}
          options={options}
          onChange={this.addToList} />
      </InputContainer>
    )
  }
}

Dropdown.PropTypes = {
  meta: PropTypes.object.isRequired,
  input: PropTypes.object.isRequired,
  options: PropTypes.array.isRequired,

  value: PropTypes.array,
  small: PropTypes.bool
}

export default Multiselect
