import React, { Component } from 'react'

import * as symbols from 'constants/symbols'
import InputContainer from 'components/common/form/input/Container'
import MultiSelect from '../common/MultiSelect'

class UpgradeOptions extends Component {
  constructor (props) {
    super(props)
    this.state = {
      values: []
    }
  }

  addToList = ({target}) => {
    this.setState({
      values: [
        ...this.state.values,
        target.value
      ]
    })
  }

  render () {
    const options = [
      {
        key: 0,
        label: 'force',
        value: symbols.UPGRADE.FORCE
      },
      {
        key: 1,
        label: 'specialist',
        value: symbols.UPGRADE.SPECIALIST
      },
      {
        key: 2,
        label: 'trooper',
        value: symbols.UPGRADE.TROOPER
      },
      {
        key: 3,
        label: 'gear',
        value: symbols.UPGRADE.GEAR
      },
      {
        key: 4,
        label: 'grenades',
        value: symbols.UPGRADE.GRENADES
      },
      {
        key: 5,
        label: 'comm',
        value: symbols.UPGRADE.COMM
      },
      {
        key: 6,
        label: 'heavy weapons',
        value: symbols.UPGRADE.HEAVY
      }
    ]
    const {input, meta, ...props} = this.props

    return (
      <InputContainer {...props} meta={meta}>
        <MultiSelect {...input} {...props} options={options} />
      </InputContainer>
    )
  }
}

export default UpgradeOptions
