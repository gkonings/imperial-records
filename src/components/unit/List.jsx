import React from 'react'

import Block from 'components/common/Block'
import ListItem from './list/ListItem'
import NewUnit from './list/NewUnit'
import styles from './List.module.scss'

const Units = ({units, addNew, location, ...props}) => {
  return (
    <Block>
      <ul className={styles.list}>
        {addNew && <NewUnit addNew={addNew} />}

        {units.list && units.list
        .map(unit =>
          <ListItem
            location={location}
            key={unit.key}
            unit={unit}
            select={() => props.selectUnit(unit)} />
        )}
      </ul>
    </Block>
  )
}

export default Units
