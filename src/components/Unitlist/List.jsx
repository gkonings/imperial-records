import React from 'react'

import ListItem from './ListItem'
import NewUnit from './NewUnit'
import styles from './UnitList.module.scss'

const List = ({units, addNew, ...props}) => {
  return (
    <ul className={styles.list}>
      {addNew && <NewUnit addNew={addNew} />}

      {units.list && units.list
        .map(unit =>
          <ListItem
            key={unit.key}
            unit={unit}
            select={() => props.selectUnit(unit)} />
        )}
    </ul>
  )
}

export default List
