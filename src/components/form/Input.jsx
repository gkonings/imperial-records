import React from 'react'

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

export default Input
