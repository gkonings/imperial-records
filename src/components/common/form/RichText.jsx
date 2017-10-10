import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Editor,
  EditorState,
  RichUtils,
  convertFromRaw,
  convertToRaw
} from 'draft-js'
import 'draft-js/dist/Draft.css'

import InputContainer from 'components/common/form/input/Container'

import styles from './Input.module.scss'

class RichText extends Component {
  constructor (props) {
    super(props)
    this.state = {
      editorState: null
    }
  }

  componentDidMount () {
    const {input} = this.props
    this.initialize(input)
  }

  componentWillUpdate (nextProps, nextState) {
    const { form: lastForm } = this.props.meta
    const { form } = nextProps.meta
    if (form !== lastForm) {
      this.initialize(nextProps.input)
    }
  }

  initialize = (input) => {
    // console.log('init')
    // console.log(input.value)
    this.setState({
      ...this.state,
      editorState: input.value
              ? this.getContentState(input.value)
              : EditorState.createEmpty()

    })
  }

  getContentState = (value) => {
    const contentState = convertFromRaw(JSON.parse(value))
    return EditorState.createWithContent(contentState)
  }

  _onBoldClick () {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'))
  }

  onChange = (editorState) => {
    const { input } = this.props
    this.setState({
      ...this.state,
      editorState
    })
    const output = convertToRaw(editorState.getCurrentContent())
    input.onChange(JSON.stringify(output))
  }

  handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command)
    if (newState) {
      this.onChange(newState)
      return 'handled'
    }
    return 'not-handled'
  }

  render () {
    const {input, small, meta, guid, ...props} = this.props
    const {editorState} = this.state
    return (
      <InputContainer {...props} meta={meta} small={small}>
        <div className={styles.textarea}>
          <button onClick={this._onBoldClick.bind(this)}>Bold</button>
          {editorState &&
          <Editor
            editorState={editorState}
            onChange={this.onChange}
            handleKeyCommand={this.handleKeyCommand} />
          }
        </div>
      </InputContainer>
    )
  }
}

RichText.PropTypes = {
  meta: PropTypes.object.isRequired,
  input: PropTypes.object.isRequired,

  label: PropTypes.string,
  small: PropTypes.bool
}

export default RichText
