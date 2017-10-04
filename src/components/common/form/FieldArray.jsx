import React from 'react'
import PropTypes from 'prop-types'

import Button from 'components/common/Button'
import ButtonGroup from 'components/common/ButtonGroup'

import InputContainer from 'components/common/form/input/Container'
import styles from './FieldArray.module.scss'

const FieldArray = ({fields, meta, itemComponent: Item, ...props}) => {
  return (
    <div>
      <InputContainer {...props} meta={meta}>
        <ul className={styles.list}>
          {fields.map((item, index) =>
            <li className={styles.listItem}
              key={index}>
              <Item
                item={item}
                remove={() => fields.remove(index)} />
            </li>)}
        </ul>
        <ButtonGroup>
          <Button
            onClick={() => fields.push({})} >Add</Button>
        </ButtonGroup>
      </InputContainer>
    </div>
  )
}

FieldArray.PropTypes = {
  fields: PropTypes.array.isRequired,
  meta: PropTypes.object.isRequired,
  itemComponent: PropTypes.object.isRequired
}

export default FieldArray
