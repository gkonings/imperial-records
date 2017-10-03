/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'

import Button from './Button'

describe('<Button />', () => {
  it('onClick should execute passed function', () => {
    const spy = jest.fn()
    const wrapper = shallow(<Button onClick={spy} />)

    wrapper.find('button').simulate('click')
    expect(spy).toHaveBeenCalled()
  })

  describe('<Button confirm />', () => {
    it('onClick should NOT execute passed function', () => {
      const spy = jest.fn()
      const wrapper = shallow(<Button confirm onClick={spy} />)

      wrapper.find('button').simulate('click')
      expect(spy).not.toHaveBeenCalled()
    })

    it('should start with closed modal', () => {
      const wrapper = shallow(<Button confirm />)

      expect(wrapper.state().confirmOpen).toBe(false)
    })

    it('onClick should open modal', () => {
      const wrapper = shallow(<Button confirm />)

      wrapper.find('button').simulate('click')
      expect(wrapper.state().confirmOpen).toBe(true)
    })

    it('should close modal on accept / call onClick', function () {
      const spy = jest.fn()
      const wrapper = shallow(<Button confirm onClick={spy} />)

      wrapper.instance().onConfirm()
      expect(wrapper.state().confirmOpen).toBe(false)
      expect(spy).toHaveBeenCalled()
    })

    it('should close modal on deny / NOT call onClick', function () {
      const spy = jest.fn()
      const wrapper = shallow(<Button confirm onClick={spy} />)

      wrapper.instance().confirmClose()
      expect(wrapper.state().confirmOpen).toBe(false)
      expect(spy).not.toHaveBeenCalled()
    })
  })
})
