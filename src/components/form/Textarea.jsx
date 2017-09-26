import React from 'react'

import InputContainer from './common/InputContainer'
import styles from './Input.module.scss'

const TextArea = ({input, small, meta, ...props}) => {
  return (
    <InputContainer {...props} meta={meta} small={small}>
      <textarea
        className={styles.textarea}
        {...input}
        {...props}
      >
        {input.value}
      </textarea>
    </InputContainer>
  )
}

export default TextArea
