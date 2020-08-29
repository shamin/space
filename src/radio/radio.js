/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/prefer-default-export */
/* eslint-disable max-len */
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import PropTypes from 'prop-types';
import { COLORS } from '../variables';

const baseStyles = css`
  cursor: pointer;
  display: inline-block;
`;

const defaultRadioStyle = css`
  height: 1px;
  width: 1px;
  opacity: 0;
  position: absolute;
`;

const radioStyle = (props) => css`
  display: inline-block;
  box-sizing: border-box;
  background: ${props.checked ? COLORS.Primary : COLORS.White};
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Ccircle cx='6' cy='6' r='6' fill='rgb%28255, 255, 255%29' fill-rule='evenodd' /%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: center;
  width: 16px;
  height: 16px;
  border-radius: 20px;
  border: ${props.checked ? 4 : 2}px solid ${props.checked ? COLORS.Primary : COLORS.Border.default};
  vertical-align: bottom;
`;

const labelStyle = css`
  font-size: 0.9rem;
  color: ${COLORS.Neutral.N7};
  margin-left: 7px;
`;

export const Radio = (props) => (
  <label
    css={baseStyles}
    onClick={(e) => {
      e.preventDefault();
      props.onChange(!props.checked);
    }}
  >
    <input css={defaultRadioStyle} type="radio" />
    <span css={radioStyle(props)} />
    <span css={labelStyle}>{props.label}</span>
  </label>
);

Radio.propTypes = {
  /**
   * Is radio disabled
   */
  // eslint-disable-next-line react/no-unused-prop-types
  disabled: PropTypes.bool,
  /**
   * On change event handler
   */
  onChange: PropTypes.func.isRequired,
  /**
   * Is radio checked
   */
  checked: PropTypes.bool.isRequired,
  /**
   * Radio label
   */
  label: PropTypes.string.isRequired,
};

Radio.defaultProps = {
  disabled: false,
};
