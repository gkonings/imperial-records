import React from 'react'

import styles from './common.module.scss'

const Dropdown = ({input, meta, options, ...props}) => {
  return (
    <select className={styles.dropdown}
      {...input}
      {...props}>
      {(!props.value || props.value.length <= 0) &&
      <option value=''>--- please select ---</option>}
      {options.map((option) =>
        <option {...option}>{option.label || option.value}</option>)}
    </select>
  )
}

export default Dropdown
