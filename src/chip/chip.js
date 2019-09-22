import React from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import PropTypes from 'prop-types';
import defaultTheme from '../themes/light';

const closeButton = (props) => css`
  padding-right: 30px;
  .chip__close {
    cursor: pointer;
    width: ${props.closeSize}px;
    height: ${props.closeSize}px;
    position: absolute;
    right: 10px;
    top: 8px;
    &:after, &:before {
      top: 50%;
      content: '';
      background: #fff;
      width: ${props.closeSize}px;
      height: 2px;
      z-index: 99;
      position: absolute;
    }
    &:after {
      transform: rotate(45deg);
    }
    &:before {
      transform: rotate(-45deg);
    }
    &:hover {
      opacity: 0.7;
    }
  }
`

const baseStyle = (props) => css`
  position: relative;
  margin-right: 10px;
  background: ${defaultTheme.colors.primary};
  display: inline-block;
  padding: 5px 20px;
  border-radius: 30px;
  color: ${defaultTheme.colors.textLight};
  ${props.closable && closeButton(props)}
`

export const Base = (props) => (
  <div
    css={baseStyle(props)}
    {...props}
  >{props.label}
    <span className="chip__close" onClick={() => props.onClose(props.chip)} />
  </div>)

const chipStyle = (theme) => css`
  background: ${theme.colors.primary};
  color: ${theme.colors.textLight};
`

export const Chip = (props) => (
  <Base
    css={chipStyle}
    {...props}
    closeSize={10} />
)

Chip.propTypes = {
  label: PropTypes.string,
  closable: PropTypes.bool,
  chip: PropTypes.object,
  onClose: PropTypes.func
}
