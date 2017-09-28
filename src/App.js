import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import checkLogin from 'actions/user/check-login'
import {
  ManageUnits
} from './views/admin'

class App extends Component {
  componentDidMount () {
    this.props.checkLogin()
  }

  render () {
    return <ManageUnits />
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    units: state.units
  }
}

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({
    checkLogin
  },
  dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
