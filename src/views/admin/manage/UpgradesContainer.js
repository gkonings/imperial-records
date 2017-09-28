import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Upgrades from './Upgrades'
import * as adminActions from 'actions/views/admin'

const mapStateToProps = (state, ownProps) => {
  return {
    manageUnits: state.admin.manageUnits
  }
}

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({
    ...adminActions
  },
  dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Upgrades)
