import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Edit from './Edit'

class EditContainer extends Component {
  componentWillReceiveProps (nextProps) {
    const prevId = this.props.match.params.id
    const id = nextProps.match.params.id
    if ((!prevId && id) || prevId !== id) {
      this.setUnit(id)
    }
  }

  setUnit = (id) => {
    this.setState({
      ...this.state,
      unit: this.props.units.filter(u => u.key === id)[0]}
    )
  }

  render () {
    const {units, ...props} = this.props
    return (
      <Edit {...props} {...this.state} />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id
  return {
    units: state.units.list,
    unit: state.units.list ? state.units.list.filter(u => u.key === id)[0] : undefined
  }
}

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({
    // ...adminActions
  },
  dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(EditContainer)
