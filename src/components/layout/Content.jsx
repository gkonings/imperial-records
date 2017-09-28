import React from 'react'

import styles from './Content.module.scss'

const Content = ({children, area, ...props}) => {
  return (
    <div
      className={styles[area]}
      {...props}>
      {children}
    </div>
  )
}

export default Content
