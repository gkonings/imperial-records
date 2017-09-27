import React from 'react'

import * as symbols from 'constants/symbols'
import Rebel from './svg-icons/Rebel'
import Imperial from './svg-icons/Imperial'
import Action from './svg-icons/Action'
import Force from './svg-icons/Force'
import Rank1 from './svg-icons/Rank.1'
import Rank2 from './svg-icons/Rank.2'
import Rank3 from './svg-icons/Rank.3'
import Die from './svg-icons/Die'
import Defense from './svg-icons/Defense'
import Melee from './svg-icons/Melee'
import Range1 from './svg-icons/Range1'
import Range2 from './svg-icons/Range2'
import Range3 from './svg-icons/Range3'
import Range4 from './svg-icons/Range4'
import Range5 from './svg-icons/Range5'
import Wounds from './svg-icons/Wounds'
import Courage from './svg-icons/Courage'
import Armor from './svg-icons/Armor'
import Dsurge from './svg-icons/Dsurge'
import Osurge from './svg-icons/Osurge'
import Hit from './svg-icons/Hit'
import Critical from './svg-icons/Critical'
import Block from './svg-icons/Block'
import Comm from './svg-icons/Comm'
import Gear from './svg-icons/Gear'
import Trooper from './svg-icons/Trooper'
import Heavy from './svg-icons/Heavy'
import Grenade from './svg-icons/Grenade'
import Specialist from './svg-icons/Specialist'
import styles from './Icon.module.scss'

const Icon = ({type}) => {
  switch (type) {
    case symbols.FACTION.REBEL:
      return <Rebel />
    case symbols.FACTION.EMPIRE:
      return <Imperial />

    case symbols.UPGRADE.FORCE:
      return <Force />

    case symbols.ABILITIES.ACTION:
      return <Action />

    case symbols.RANK.TROOPER:
      return <Rank1 />
    case symbols.RANK.VEHICLE:
      return <Rank2 />
    case symbols.RANK.COMMANDER:
      return <Rank3 />

    case symbols.DICE.BLACK:
    case symbols.DICE.RED:
    case symbols.DICE.WHITE:
      return <Die />

    case symbols.DEFENSE.RED:
    case symbols.DEFENSE.WHITE:
      return <Defense />

    case symbols.RANGE.MELEE:
      return <Melee />
    case symbols.RANGE.RANGE1:
      return <Range1 />
    case symbols.RANGE.RANGE2:
      return <Range2 />
    case symbols.RANGE.RANGE3:
      return <Range3 />
    case symbols.RANGE.RANGE4:
      return <Range4 />
    case symbols.RANGE.RANGE5:
      return <Range5 />

    case symbols.STATS.COURAGE:
      return <Courage />
    case symbols.STATS.WOUNDS:
      return <Wounds />
    case symbols.STATS.ARMOR:
      return <Armor />

    case symbols.UPGRADE.COMM:
      return <Comm />
    case symbols.UPGRADE.GEAR:
      return <Gear />
    case symbols.UPGRADE.GRENADES:
      return <Grenade />
    case symbols.UPGRADE.SPECIALIST:
      return <Specialist />
    case symbols.UPGRADE.TROOPER:
      return <Trooper />
    case symbols.UPGRADE.HEAVY:
      return <Heavy />

    case symbols.RESULTS.BLOCK:
      return <Block />
    case symbols.RESULTS.CRITICAL:
      return <Critical />
    case symbols.RESULTS.HIT:
      return <Hit />
    case symbols.RESULTS.OFFENSIVE_SURGE:
      return <Osurge />
    case symbols.RESULTS.DEFENSIVE_SURGE:
      return <Dsurge />

    default:
      return null
  }
}

const getClass = (type) => {
  switch (type) {
    case symbols.DICE.BLACK:
      return styles.blackDie
    case symbols.DICE.RED:
      return styles.redDie
    case symbols.DICE.WHITE:
    case symbols.DEFENSE.WHITE:
      return styles.whiteDie
    case symbols.DEFENSE.RED:
      return styles.redDefense

    case symbols.STATS.ARMOR:
      return styles.armor
    case symbols.STATS.WOUNDS:
      return styles.wounds
    case symbols.STATS.COURAGE:
      return styles.courage

    default:
      return styles.icon
  }
}

const IconContainer = (props) => {
  return (
    <div className={getClass(props.type)} >
      <Icon {...props} />
    </div>
  )
}

export default IconContainer
