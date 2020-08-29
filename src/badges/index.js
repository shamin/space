/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable import/prefer-default-export */
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import PropTypes from 'prop-types';
import { COLORS, FONT_SIZES } from '../variables';

const baseStyles = (props) => css`
  display: block;
  height: 24px;
  width: 24px;
  background: ${props.color};
  color: ${COLORS.White};
  border-radius: 20px;
  font-size: ${FONT_SIZES.small}rem;
  box-sizing: border-box;
  padding-top: 4px;
  text-align: center;
`;

export const Pill = (props) => (
  <span css={baseStyles(props)}>{props.number}</span>
);

Pill.propTypes = {
  /**
   * Badge background color
   */
  color: PropTypes.string,
  number: PropTypes.number.isRequired,
}

Pill.defaultProps = {
  color: COLORS.Primary,
}
