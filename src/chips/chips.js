import React, { Component } from 'react'
import styled from 'styled-components'

const ChipsElement = styled.div`
  background: tomato;
  display: inline-block;
  color: #ffffff;
  padding: 5px 10px;
  border-radius: 20px;
`;

export class Chips extends Component {
  render() {
    return (
      <ChipsElement>
        {this.props.children}
      </ChipsElement>
    );
  }
}
