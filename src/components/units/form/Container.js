import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import addUnit from 'actions/units/add'
import updateUnit from 'actions/units/update'
import deleteUnit from 'actions/units/delete'
import UnitForm from './Form'

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({
    addUnit,
    updateUnit,
    deleteUnit
  }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(UnitForm)
