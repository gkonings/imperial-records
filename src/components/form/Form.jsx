import React, { Component } from 'react'

import styles from './Form.module.scss'

class Form extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {
    this.setWidth()
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', this.setWidth, false)
    }
  }

  componentWillUnmount () {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.setWidth)
    }
  }

  setWidth = () => {
    const rect = this.form.getBoundingClientRect()
    this.setState({
      ...this.state,
      doubleColumn: rect.width > 800
    })
  }

  render () {
    const { doubleColumn } = this.state
    return (
      <form
        className={doubleColumn ? styles.formDoubleColumn : styles.form}
        ref={(input) => { this.form = input }}
        {...this.props}>
        {this.props.children}
      </form>
    )
  }
}

export default Form
