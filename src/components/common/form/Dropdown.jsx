import React from 'react'
import PropTypes from 'prop-types'

import InputContainer from 'components/common/form/input/Container'
import styles from './Dropdown.module.scss'

const Dropdown = ({input, meta, options, small, hideContainer, ...props}) => {
  return (
    <InputContainer {...props}
      hideContainer={hideContainer}
      meta={meta}
      small={small}>
      <select className={styles.dropdown}
        {...input}
        {...props}>
        {(!props.value || props.value.length <= 0) &&
        <option value=''>--- please select ---</option>}
        {options.map((option) =>
          <option {...option}>{option.label || option.value}</option>)}
      </select>
    </InputContainer>
  )
}

Dropdown.PropTypes = {
  meta: PropTypes.object.isRequired,
  input: PropTypes.object.isRequired,
  options: PropTypes.array.isRequired,

  value: PropTypes.string,
  small: PropTypes.bool,
  hideContainer: PropTypes.bool
}

export default Dropdown
