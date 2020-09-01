/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/prefer-default-export */
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import PropTypes from 'prop-types';
import { COLORS, FONT_SIZES } from '../variables';

const baseStyles = css`
  cursor: pointer;
  display: inline-block;
`;

const defaultCheckboxStyle = css`
  height: 1px;
  width: 1px;
  opacity: 0;
  position: absolute;
`;

const checkboxStyle = (props) => css`
  display: inline-block;
  box-sizing: border-box;
  background: ${props.checked ? COLORS.Primary : COLORS.White};
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='17' viewBox='0 0 16 17'%3E%3Cpath d='M0.9375,9l4.5,5.36207l9.5,-13.5' fill='none' fill-rule='evenodd' stroke='rgb%28255, 255, 255%29' stroke-linecap='round' stroke-width='2' /%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: center;
  width: 24px;
  height: 24px;
  border-radius: 6px;
  border: 2px solid ${props.checked ? COLORS.Primary : COLORS.Border.default};
  vertical-align: bottom;
`;

const labelStyle = css`
  font-size: 16px;
  color: ${COLORS.Neutral.N7};
  margin-left: 7px;
`;

export const Checkbox = (props) => (
  <label
    css={baseStyles}
    onClick={(e) => {
      e.preventDefault();
      props.onChange(!props.checked);
    }}
  >
    <input css={defaultCheckboxStyle} type="checkbox" />
    <span css={checkboxStyle(props)} />
    <span css={labelStyle}>{props.label}</span>
  </label>
);

Checkbox.propTypes = {
  /**
   * Is checkbox disabled
   */
  disabled: PropTypes.bool,
  /**
   * On change event handler
   */
  onChange: PropTypes.func.isRequired,
  /**
   * Is checkbox checked
   */
  checked: PropTypes.bool.isRequired,
  /**
   * Checkbox label
   */
  label: PropTypes.string.isRequired,
};

Checkbox.defaultProps = {
  disabled: false,
};
