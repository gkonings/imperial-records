import React from 'react'
import PropTypes from 'prop-types'

import Label from './Label'
import Error from './Error'
import styles from './Container.module.scss'

const InputContainer = ({children, meta, hideContainer, ...props}) => {
  if (hideContainer) {
    return <div>{children}</div>
  }
  const label = props.label || props.placeholder

  return (
    <div className={styles.container}>
      <Label value={label} required={props.required} small={props.small} />

      <div className={props.small ? styles.inputSmall : styles.input}>
        <Error {...meta} />
        {children}
      </div>
    </div>
  )
}

InputContainer.PropTypes = {
  meta: PropTypes.object.isRequired,

  label: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  small: PropTypes.bool,
  hideContainer: PropTypes.bool
}

export default InputContainer
