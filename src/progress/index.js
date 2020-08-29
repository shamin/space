/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/prefer-default-export */
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import PropTypes from 'prop-types';
import { COLORS, FONT_SIZES } from '../variables';
import { Text } from '..';

const baseStyles = () => css`
  display: inline-block;
`;

const progressBarStyles = ({ width }) => css`
  width: ${width}px;
  height: 12px;
  background: ${COLORS.Neutral.N2};
  border-radius: 10px;
  display: inline-block;
`;

const progressStyles = ({ progress, color }) => css`
  width: ${progress}%;
  height: 100%;
  border-radius: 10px;
  background: ${color};
`;

export const Progress = (props) => (
  <div css={baseStyles(props)}>
    <div css={progressBarStyles(props)}>
      <div css={progressStyles(props)} />
    </div>
    {props.showText && (
      <Text color={COLORS.Neutral.N7} size={FONT_SIZES.small}>{`${props.progress}% complete`}</Text>
    )}
  </div>
);

Progress.propTypes = {
  /**
   * Progress in percent
   */
  progress: PropTypes.string.isRequired,
  /**
   * Width of progress bar
   */
  // eslint-disable-next-line react/no-unused-prop-types
  width: PropTypes.number,
  /**
   * Color of progress bar
   */
  // eslint-disable-next-line react/no-unused-prop-types
  color: PropTypes.string,
  /**
   * To show percentage text
   */
  showText: PropTypes.bool,
}

Progress.defaultProps = {
  width: 300,
  color: COLORS.Primary,
  showText: false,
}
