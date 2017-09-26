import React, { Component } from 'react'

import Dropdown from '../Dropdown'
import SelectedList from './SelectedList'

class Multiselect extends Component {
  addToList = ({target}) => {
    this.props.onChange([...this.props.value, target.value])
  }

  removeFromList = (index) => {
    this.props.onChange(this.props.value
      .filter((v, i) => i !== index))
  }

  render () {
    const {value, options} = this.props

    return (
      <div>
        <SelectedList
          values={value}
          removeFromList={this.removeFromList} />
        <Dropdown
          options={options}
          value=''
          onChange={this.addToList} />
      </div>
    )
  }
}

export default Multiselect
