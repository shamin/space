import React from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import PropTypes from 'prop-types';
import defaultTheme from '../themes/light';


const baseStyles = (props) => css`
  display: inline-block;
  width: ${props.size/2}px;
  height: ${props.size}px;
  padding-left: ${props.size/2}px;
  > div {
    width: ${props.size/2}px;
    height: ${props.size/2}px;
    border-top-right-radius: 30px;
    border: 3px solid ${defaultTheme.colors.primary};
    border-left: 0;
    border-bottom: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    animation: spin 1s linear infinite;
    transform-origin: 0% 100%;
    @-moz-keyframes spin {
      100% {
        -moz-transform: rotate(360deg);
      }
    }
    @-webkit-keyframes spin {
      100% {
        -webkit-transform: rotate(360deg);
      }
    }
    @keyframes spin {
      100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }
  }
`

export const Base = (props) => (
  <div
    css={baseStyles(props)}
    {...props}
  >
    <div></div>
  </div>)

const spinnerStyle = (theme) => css`

`

export const Spinner = (props) => {
  console.log(props)
  return (
  <Base
    css={spinnerStyle}
    {...props} />
)}

Spinner.defaultProps = {
  size: 30
}

Spinner.propTypes = {
  size: PropTypes.number
}
