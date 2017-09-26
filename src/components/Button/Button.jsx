import React, { Component } from 'react'

import Confirm from '../modal/Confirm'
import styles from './Button.module.scss'

class Button extends Component {
  constructor (props) {
    super(props)
    this.state = {
      confirmOpen: false
    }
  }

  onConfirm = (...props) => {
    this.confirmClose()
    this.props.onClick(...props)
  }

  confirmClose = () => {
    this.setState({
      ...this.state,
      confirmOpen: false
    })
  }

  confirmOpen = () => {
    this.setState({
      ...this.state,
      confirmOpen: true
    })
  }

  getClassName = () => {
    const {link, color} = this.props
    if (link) return styles.link
    if (!color) return styles.button
    return styles[color]
  }

  render () {
    const {type, link, confirm, confirmMessage, ...props} = this.props
    const {confirmOpen} = this.state

    return (
      <div>
        <button
          className={this.getClassName()}
          {...props}
          type={type || 'button'}
          onClick={confirm
            ? this.confirmOpen
            : props.onClick}>
          {props.children}
        </button>
        {confirm &&
        <Confirm
          isOpen={confirmOpen}
          confirmMessage={confirmMessage}
          onRequestClose={this.confirmClose}
          onConfirm={this.onConfirm} />}
      </div>
    )
  }
}

export default Button
