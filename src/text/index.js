/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/prefer-default-export */
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import PropTypes from 'prop-types';
import { COLORS, WEIGHTS, FONT_SIZES } from '../variables';

const baseStyles = (props) => css`
  padding: 0;
  margin: 0;
  font-size: ${props.size}rem;
  font-weight: ${props.weight};
  color: ${props.color};
`;

export const Text = (props) => <p css={baseStyles(props)}>{props.children}</p>;

Text.propTypes = {
  /**
   * Font size
   */
  // eslint-disable-next-line react/no-unused-prop-types
  size: PropTypes.number,
  /**
   * Font weight (normal, medium)
   */
  // eslint-disable-next-line react/no-unused-prop-types
  weight: PropTypes.number,
  /**
   * Text color
   */
  // eslint-disable-next-line react/no-unused-prop-types
  color: PropTypes.string,
  /**
   * Children
   */
  children: PropTypes.node.isRequired,
}

Text.defaultProps = {
  size: FONT_SIZES.small,
  weight: WEIGHTS.normal,
  color: COLORS.Neutral.N10,
}
