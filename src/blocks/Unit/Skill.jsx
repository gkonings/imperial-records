import React from 'react'

import Icon from 'components/common/Icon'
import * as symbols from 'constants/symbols'
import styles from './Skills.module.scss'

const Skill = ({skill}) => {
  return (
    <div className={styles.skill}>
      <h5 className={styles.name}>
        {skill.action && <Icon type={symbols.ABILITIES.ACTION} />}
        {skill.name}
      </h5>
      <p className={styles.text}>{skill.text}</p>
    </div>
  )
}

export default Skill
