import React from 'react'

import { Button, ButtonGroup } from 'components/common'

import InputContainer from '../common/InputContainer'
import Skill from './Skill'
import styles from './Skills.module.scss'

const Skills = ({fields, meta, ...props}) => {
  return (
    <div className={styles.skills}>
      <InputContainer {...props} meta={meta}>
        <ul>
          {fields.map((skill, index) =>
            <Skill
              key={index}
              skill={skill}
              remove={() => fields.remove(index)} />)}
        </ul>
        <ButtonGroup>
          <Button
            onClick={() => fields.push({})}>Add Skill</Button>
        </ButtonGroup>
      </InputContainer>
    </div>
  )
}

export default Skills
