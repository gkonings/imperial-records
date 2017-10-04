import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import List from './List'
import getUnits from '../../actions/units/get'

class UnitsContainer extends Component {
  componentDidMount () {
    const { units, livereload } = this.props
    if (!units.loading && !units.list) {
      this.props.getUnits(livereload)
    }
  }

  render () {
    return <List {...this.props} />
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
