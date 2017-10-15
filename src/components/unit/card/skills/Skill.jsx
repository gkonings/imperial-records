import React from 'react'

import Icon from 'components/common/Icon'
import DisplayRte from 'components/common/DisplayRte'
import * as symbols from 'constants/symbols'
import styles from './Skill.module.scss'

const Skill = ({skill}) => {
  return (
    <div className={styles.skill}>
      <h5 className={styles.name}>
        {skill.action && <Icon type={symbols.ABILITIES.ACTION} />}
        {skill.name}
      </h5>
      <DisplayRte
        className={styles.text}
        text={skill.textRte} />
    </div>
  )
}

export default Skill
