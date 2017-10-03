import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Confirm from 'components/modal/Confirm'
import styles from './Button.module.scss'

class Button extends Component {
  PropTypes = {
    onClick: PropTypes.func.isRequired,

    color: PropTypes.oneOf(['primary', 'danger']),
    type: PropTypes.oneOf(['submit', 'button']),
    link: PropTypes.bool,
    confirm: PropTypes.bool,
    confirmMessage: PropTypes.string
  }

  defaultProps = {
    type: 'button'
  }

  state = {
    confirmOpen: false
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
    const {children, color, type, link, confirm, confirmMessage, ...props} = this.props
    const {confirmOpen} = this.state

    return (
      <div>
        <button
          className={this.getClassName()}
          {...props}
          type={type}
          onClick={confirm
            ? this.confirmOpen
            : props.onClick}>
          {children}
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
