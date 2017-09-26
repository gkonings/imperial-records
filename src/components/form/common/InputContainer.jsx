import React from 'react'

import Label from './Label'
import Error from './Error'
import styles from './common.module.scss'

const InputContainer = ({children, meta, ...props}) => {
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

export default InputContainer
