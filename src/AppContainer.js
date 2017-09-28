import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import checkLogin from 'actions/user/check-login'
import App from './App'

class AppContainer extends Component {
  componentDidMount () {
    this.props.checkLogin()
  }

  render () {
    return <App />
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

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
