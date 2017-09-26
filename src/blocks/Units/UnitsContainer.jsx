import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Units from './Units'
import getUnits from '../../actions/units/get'

class UnitsContainer extends Component {
  componentWillMount () {
    const { units, livereload } = this.props
    if (!units.loading && !units.list) {
      this.props.getUnits(livereload)
    }
  }

  render () {
    return <Units {...this.props} />
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    units: state.units
  }
}

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({
    getUnits
  },
  dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(UnitsContainer)
