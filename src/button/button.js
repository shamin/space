/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/prefer-default-export */
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import PropTypes from 'prop-types';
import { FONT_SIZES } from '../variables';
// import { Spinner } from '../spinner';

const baseStyles = (props) => css`
  cursor: ${props.disabled ? 'no-drop' : 'pointer'};
  outline: none;
  font-family: inherit;
  width: ${props.width}px;
  height: ${props.height}px;
  font-size: ${props.fontSize || FONT_SIZES.medium}rem;
  background: ${props.background};
  color: ${props.color};
  border: ${props.border};
  box-shadow: ${props.boxShadow};
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${props.disabled ? 0.7 : 1};
`;

export const Button = (props) => (
  <button
    type="button"
    className={props.className}
    css={baseStyles(props)}
    onClick={props.onClick}
    disabled={props.disabled}
  >
    {/* {props.loading ? <Spinner size={props.height / 2} color={props.color} /> : props.text} */}
    {props.text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number,
  className: PropTypes.string,
};

Button.defaultProps = {
  width: 136,
  height: 38,
  disabled: false,
  className: '',
};
