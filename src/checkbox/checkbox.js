import React from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import PropTypes from 'prop-types';
import defaultTheme from '../themes/light';

const baseStyle = css`
  > input {
     display: none;
  }
  > input + label {
    position: relative; 
    padding-left: 25px;
    padding-top: 3px;
    cursor: pointer;
    user-select: none; 
    &:before {
      content: '';
      position: absolute;
      left:0; top: 1px;
      width: 20px; 
      height: 20px; 
      background: rgb(241, 242, 246);
      border-radius: 3px; 
      box-shadow: ${defaultTheme.boxShadow};
    }
    &:after {
      content: '';
      position: absolute;
      top: 3px; 
      left: 6px;
      border-bottom: 2px solid ${defaultTheme.colors.primary};
      border-right: 2px solid ${defaultTheme.colors.primary};
      width: 5px;
      height: 10px;
      font-size: 16px;
      transform: rotate(45deg);
      transition: all .1s;
    }
  }
  > input:not(:checked) + label {
      &:after {
        opacity: 0; 
      }
  }
  > input:disabled:not(:checked) + label {
      &:before {
        background-color: backgroundPrimaryDisabled;
      }
  }
  > input:checked + label {
    &:after {
      opacity: 1; 
    }
  }
  > input:disabled:checked + label {
    &:after {
      border-bottom: 2px solid ${defaultTheme.colors.primaryDisabled};
      border-right: 2px solid ${defaultTheme.colors.primaryDisabled};
    }
  }
  > input:disabled + label {
    opacity: 0.5;
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
      css={baseStyle}
      {...props}
    >
      <input
        type="checkbox"
        checked={props.checked}
        disabled={props.disabled}
        onChange={() => { }}
      />
      <label>{props.label}</label>
    </div>
  )
}

const checkboxStyle = (theme) => css`
  > input + label {
    &:before {
      box-shadow: ${theme.boxShadow};
    }
    &:after {
      border-bottom: 2px solid ${theme.colors.primary};
      border-right: 2px solid ${theme.colors.primary};
    }
  }
  > input:disabled:checked + label {
    &:after {
      border-bottom: 2px solid ${theme.colors.primaryDisabled};
      border-right: 2px solid ${theme.colors.primaryDisabled};
    }
  }
`

export const Checkbox = (props) => (
  <Base
    css={checkboxStyle}
    {...props}
  />
)

Checkbox.propTypes = {
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool,
  disabled: PropTypes.bool
}
