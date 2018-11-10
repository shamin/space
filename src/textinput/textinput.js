import React, { Component } from 'react'
import styled from 'styled-components'

const Input = styled.input.attrs({
  type: "text"
})`
  ::placeholder {
    color: palevioletred;
  }
`

export class TextInput extends Component {
  render() {
    return (
      <Input {...this.props} />
    )
  }
}
