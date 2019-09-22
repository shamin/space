import React from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import PropTypes from 'prop-types';
import defaultTheme from '../themes/light';

const baseStyles = css`
  background: ${defaultTheme.colors.primary};
  font-size: ${defaultTheme.font.size};
  border-radius: ${defaultTheme.border.radius};
  border: none;
  width: 192px;
  height: 48px;
  cursor: pointer;
  &:active, &:focus {
    outline: none;
  };
  &:hover {
    background: ${defaultTheme.colors.hoveredColor}
  }
`

const BaseButton = props => (
  <button
    css={baseStyles}
    {...props} />
)

export const Button = (props) => (
  <BaseButton css={theme => ({
    background: theme.colors.primary,
    color: theme.colors.textLight,
    borderRadius: theme.border.radius,
    fontSize: theme.font.size,
    '&:hover': {
      background: theme.colors.hoveredColor,
    },
  })}>
    {props.children}
  </BaseButton>
)

Button.propTypes = {
  disabled: PropTypes.bool
};
