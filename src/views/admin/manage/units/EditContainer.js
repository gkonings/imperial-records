import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Edit from './Edit'

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

export default connect(mapStateToProps, mapDispatchToProps)(Edit)
