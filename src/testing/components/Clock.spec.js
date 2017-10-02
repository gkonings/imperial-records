/* eslint-env jest */
import React from 'react'
import { mount, shallow } from 'enzyme'
import Clock from './Clock'

describe('Clock', () => {
  it('renders without crashing', () => {
    mount(<Clock />)
  })

  describe('render', () => {
    it('should render the clock', () => {
      const clock = shallow(<Clock timeInSeconds={63} />)
      const time = <span className='clock-text'>01:03</span>

      expect(clock.contains(time)).toBe(true)
    })
  })

  describe('formatTime', () => {
    it('should format seconds', () => {
      const clock = shallow(<Clock />)
      const seconds = 635
      const expected = '10:35'
      const actual = clock.instance().formatTime(seconds)

      expect(actual).toBe(expected)
    })

    it('should format seconds when minutes or seconds are less than 10', () => {
      const clock = shallow(<Clock />)
      const seconds = 65
      const expected = '01:05'
      const actual = clock.instance().formatTime(seconds)

      expect(actual).toBe(expected)
    })
  })
})
