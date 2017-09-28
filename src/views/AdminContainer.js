import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Admin from './Admin'

class AppContainer extends Component {
  render () {
    return <Admin {...this.props} />
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({

  },
  dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
