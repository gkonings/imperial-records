import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router'

import login from 'actions/user/login'
import logout from 'actions/user/logout'
import Header from './Header'

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({
    login,
    logout
  }, dispatch)
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header))
