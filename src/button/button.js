import React from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import PropTypes from 'prop-types';
import defaultTheme from '../themes/light';

const baseStyles = (props) => css`
  background: ${defaultTheme.colors.primary};
  font-size: ${defaultTheme.font.size};
  border-radius: ${defaultTheme.border.radius};
  border: none;
  width: 192px;
  height: 48px;
  opacity: ${props.disabled ? 0.7 : 1};
  cursor: ${props.disabled ? 'not-allowed' : 'pointer'};
  &:active, &:focus {
    outline: none;
  };
  &:hover {
    background: ${defaultTheme.colors.hoveredColor}
  }
`

const BaseButton = props => (
  <button
    css={baseStyles(props)}
    {...props} />
)

export const Button = (props) => {
  const newProps = {
    ...props,
    children: props.loading ? "loading..." : props.children, //Replace this with our loading component
    disabled: props.loading
  }
  return (
    <BaseButton css={theme => ({
      color: theme.colors.textLight,
      borderRadius: theme.border.radius,
      fontSize: theme.font.size,
      '&:hover': {
        background: (newProps.disabled) ? theme.colors.primary : theme.colors.hoveredColor,
      },
    })}
      {...newProps} />
  )
}

export const SmallButton = (props) => (
  <Button css={theme => ({
    width: 128,
    height: 36,
    fontSize: "0.9rem"
  })}
    {...props}></Button>
)

Button.propTypes = {
  disabled: PropTypes.bool,
  loading: PropTypes.bool
};
