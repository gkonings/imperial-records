import React from 'react'
import PropTypes from 'prop-types'

import InputContainer from 'components/common/form/input/Container'
import styles from './Input.module.scss'

const Input = ({input, small, meta, ...props}) => {
  return (
    <InputContainer {...props} meta={meta} small={small}>
      <input
        className={styles.input}
        placeholder={props.label}
        type='text'
        {...input}
        {...props}
      />
    </InputContainer>
  )
}

Input.PropTypes = {
  meta: PropTypes.object.isRequired,
  input: PropTypes.object.isRequired,

  label: PropTypes.string,
  small: PropTypes.bool
}

export default Input
