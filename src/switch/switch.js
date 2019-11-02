import React from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import PropTypes from 'prop-types';
import defaultTheme from '../themes/light';

const baseStyle = (props) => css`
  height: ${props.size * 6}px;
  width: ${props.size * 12}px;
  > input {
     display: none;
  }
  > input + label {
    position: relative;
    cursor: pointer;
    user-select: none;
    &:before {
      content: '';
      position: absolute;
      left: ${props.size}px;
      top:  ${props.size}px;
      width: ${props.size * 10}px;
      height: ${props.size * 4}px;
      background: rgb(241, 242, 246);
      border-radius: ${props.size * 3}px;
      box-shadow: ${defaultTheme.boxShadow};
    }
    &:after {
      content: '';
      position: absolute;
      background: ${defaultTheme.colors.primary};
      box-shadow: ${defaultTheme.boxShadow};
      border: none;
      top: 0; 
      left: ${props.size * 6}px; 
      width: ${props.size * 6}px;
      height: ${props.size * 6}px;
      border-radius: 100%;
      transition: all .1s;
    }
  }
  > input:not(:checked) + label {
      &:after {
        left: 0;
        background: rgb(241, 242, 246);
      }
  }
  > input:disabled:not(:checked) + label {
      &:before {
        background-color: ${defaultTheme.colors.backgroundPrimaryDisabled};
      }
  }
  > input:checked + label {
    &:after {
      opacity: 1; 
    }
  }
  > input:disabled:checked + label {
    &:after {
      opacity: 0.7;
    }
  }
  > input:disabled + label {
    cursor: not-allowed;
  }
  > input:checked:focus + label, input:not(:checked):focus + label {
    &:before {
      border: 1px dotted blue;
    }
  }
`

export const Base = (props) => {
  return (
    <div
      onClick={() => (!props.disabled && props.onChange(!props.checked))}
      css={baseStyle(props)}
      {...props}
    >
      <input
        type="checkbox"
        checked={props.checked}
        disabled={props.disabled}
        onChange={() => { }}
      />
      <label />
    </div>
  )
}

const switchStyle = (theme) => css`
  > input + label {
    &:before {
      box-shadow: ${theme.boxShadow};
    }
    &:after {
      background: ${theme.colors.primary};
      box-shadow: ${theme.boxShadow};
    }
  }
  > input:disabled:not(:checked) + label {
      &:before {
        background-color: ${theme.colors.backgroundPrimaryDisabled};
      }
  }
`

export const Switch = (props) => (
  <Base
    css={switchStyle}
    {...props}
    size={4}
  />
)

Switch.propTypes = {
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool,
  disabled: PropTypes.bool
}
