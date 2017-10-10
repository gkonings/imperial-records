import React from 'react'
import PropTypes from 'prop-types'

import InputContainer from 'components/common/form/input/Container'
import styles from './Input.module.scss'

const TextArea = ({input, small, meta, ...props}) => {
  return (
    <InputContainer {...props} meta={meta} small={small}>
      <textarea
        className={styles.textarea}
        {...input}
        {...props}>
        {input.value}
      </textarea>
    </InputContainer>
  )
}

TextArea.PropTypes = {
  meta: PropTypes.object.isRequired,
  input: PropTypes.object.isRequired,

  label: PropTypes.string,
  small: PropTypes.bool
}

export default TextArea
