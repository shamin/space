import React from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import PropTypes from 'prop-types';
import defaultTheme from '../themes/light';

const baseStyle = css`
  margin-bottom: 10px;
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
      border-radius: 10px;
      background: rgb(241, 242, 246);
      box-shadow: ${defaultTheme.boxShadow};
    }
    &:after {
      content: '';
      position: absolute;
      top: 6px; 
      left: 5px;
      background: ${defaultTheme.colors.primary};
      border-radius: 50%;
      width: 10px;
      height: 10px;
      font-size: 16px;
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
      background: ${defaultTheme.colors.primaryDisabled};
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
      onClick={() => (!props.disabled && props.onSelected())}
      css={baseStyle}
      {...props}
    >
      <input
        type="radio"
        checked={props.checked}
        disabled={props.disabled}
        onChange={() => { }}
      />
      <label>{props.label}</label>
    </div>
  )
}

const radioButtonStyle = (theme) => css`
  > input + label {
    &:before {
      box-shadow: ${theme.boxShadow};
    }
    &:after {
      background: ${theme.colors.primary};
    }
  }
  > input:disabled:not(:checked) + label {
      &:before {
        background-color: ${theme.colors.backgroundPrimaryDisabled};
      }
  }
  > input:disabled:checked + label {
    &:after {
      background: ${theme.colors.primaryDisabled};
    }
  }
`

export const RadioButton = (props) => (
  <Base
    css={radioButtonStyle}
    {...props}
  />
)

export const RadioGroup = (props) => (
  <div>
    {(props.options.map((option) =>
      <RadioButton
        key={option.key}
        label={option.value}
        onSelected={() => props.onChange(option)}
        checked={option.key === props.selected}
        disabled={option.disabled || props.disabled}
      />))

    }
  </div>
)

RadioGroup.propTypes = {
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  selected: PropTypes.string,
  disabled: PropTypes.bool
}
