import React from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import PropTypes from 'prop-types';
import defaultTheme from '../themes/light';


const baseStyle = css`
  position: relative;
  display: inline-block;
  &:after {
    content: "";
    width: 6px;
    height: 6px;
    border-bottom: 1px solid #000;
    border-right: 1px solid #000;
    transform: rotate(45deg);
    top: 12px;
    right: 10px;
    position: absolute;
  }
  & select {
    -webkit-appearance: none;
    border: none;
    padding: 10px;
    padding-right: 50px;
    box-shadow: ${defaultTheme.boxShadow};
    background: ${defaultTheme.colors.backgroundPrimary};
    &:active, &:focus {
      outline: none;
    }
  }
`

export const Base = (props) => (
  <div
    css={baseStyle}
    {...props}
  >
    <select onChange={(e) => props.onSelect(e.target.value)} defaultValue={props.defaultValue}>
      {props.children}
    </select>
  </div>)

const selectStyle = (theme) => css`
  & select {
    box-shadow: ${theme.boxShadow};
    background: ${theme.colors.backgroundPrimary}
  }
`

export const Select = (props) => (
  <Base
    css={selectStyle}
    {...props}>
    {props.options.map((option) =>
      <option key={option.key} value={option.key}>{option.value}</option>)}
  </Base>
)

Select.propTypes = {
  defaultValue: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  selected: PropTypes.string,
  disabled: PropTypes.bool
}

