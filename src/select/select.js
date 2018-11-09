import React, { Component } from 'react'
import styled from 'styled-components'

const SelectElement = styled.div`
  position: relative;
  max-width: 370px;
  height: 50px;
  &:after {
    content: "";
    width: 10px;
    height: 10px;
    border-bottom: 1px solid #000;
    border-right: 1px solid #000;
    transform: rotate(45deg);
    top: 10px;
    right: 10px;
    position: absolute;
    display: inline-block;
  }
`;

const SelectOption = styled.select`
  left: 0;
  position: absolute;
  width: 100%;
  border-radius: 2px;
  border: none;
  background-color: 'red';
  -webkit-appearance: none;
  outline: none;
  font-size: 1rem;
  padding: 10px 25px;
  padding-right: 35px;
  color:#000;
`

export class Select extends Component {
  render() {
    return (
      <SelectElement>
        <SelectOption>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </SelectOption>
      </SelectElement>
    );
  }
}
