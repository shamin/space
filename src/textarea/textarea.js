import React, { Component } from 'react'
import styled from 'styled-components'

const Input = styled.textarea.attrs({
  type: props => (props.type),
})`
  padding: 10px;
  ::placeholder {
    color: gray;
  }
`

export class TextArea extends Component {
  render() {
    return (
      <Input {...this.props} />
    )
  }
}
