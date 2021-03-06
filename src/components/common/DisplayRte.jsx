import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Editor,
  EditorState,
  convertFromRaw
} from 'draft-js'
import 'draft-js/dist/Draft.css'

class DisplayRte extends Component {
  state = {
    editorState: null
  }
  componentDidMount () {
    const {text} = this.props
    this.initialize(text)
  }

  initialize = (value) => {
    this.setState({
      ...this.state,
      editorState: value
              ? this.getContentState(value)
              : EditorState.createEmpty()

    })
  }

  getContentState = (value) => {
    const contentState = convertFromRaw(JSON.parse(value))
    return EditorState.createWithContent(contentState)
  }

  render () {
    const {editorState} = this.state
    const {text, className, ...props} = this.props
    return editorState &&
    (<div className={className}>
      <Editor readOnly
        {...props}
        editorState={editorState} />
      </div>)
  }
}

DisplayRte.propTypes = {
  text: PropTypes.string.isRequired
}

export default DisplayRte
