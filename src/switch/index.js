/* eslint-disable import/prefer-default-export */
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import PropTypes from 'prop-types';
import { COLORS } from '../variables';

const baseStyles = () => css`
  cursor: pointer;
  background: none;
  border: none;
  outline: none;
  padding: 0;
`;

const switchStyle = (props) => css`
  position: relative;
  display: inline-block;
  width: 32px;
  height: 18px;
  background: ${props.checked ? COLORS.Primary : COLORS.Neutral.N3};
  border-radius: 10px;
`

const switchThumbStyle = (props) => css`
  transition: 0.3s ease;
  position: absolute;
  display: inline-block;
  background: ${COLORS.White};
  height: 14px;
  width: 14px;
  border-radius: 100%;
  top: 2px;
  left: ${props.checked ? 16 : 2}px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.04);
`
export const Switch = (props) => (
  <button type="button" css={baseStyles(props)} onClick={() => props.onChange(!props.checked)}>
    <span css={switchStyle(props)}>
      <span css={switchThumbStyle(props)} />
    </span>
  </button>
);

Switch.propTypes = {
  /**
   * Is switched checked
   */
  checked: PropTypes.bool.isRequired,
  /**
   * Switch change event handler
   */
  onChange: PropTypes.func.isRequired,
}
