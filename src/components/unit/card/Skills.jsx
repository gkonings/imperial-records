import React from 'react'

import Skill from './skills/Skill'
import styles from './Skills.module.scss'

const Skills = ({unit: {skills}}) => {
  return (
    <div className={styles.skills}>
      {skills && skills.map((skill, index) =>
        <Skill key={index} skill={skill} />)}
    </div>
  )
}

export default Skills
