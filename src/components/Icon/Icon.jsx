import React from 'react'

import * as symbols from '../../constants/symbols'
import Rebel from './Rebel'
import Imperial from './Imperial'
import Action from './Action'
import Force from './Force'
import Rank1 from './Rank.1'
import Rank2 from './Rank.2'
import Rank3 from './Rank.3'
import Die from './Die'
import Defense from './Defense'
import Melee from './Melee'
import Range1 from './Range1'
import Range2 from './Range2'
import Range3 from './Range3'
import Range4 from './Range4'
import Range5 from './Range5'
import Wounds from './Wounds'
import Courage from './Courage'
import Armor from './Armor'
import Dsurge from './Dsurge'
import Osurge from './Osurge'
import Hit from './Hit'
import Critical from './Critical'
import Block from './Block'
import Comm from './Comm'
import Gear from './Gear'
import Trooper from './Trooper'
import Heavy from './Heavy'
import Grenade from './Grenade'
import Specialist from './Specialist'
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
