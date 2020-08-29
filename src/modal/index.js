/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable import/prefer-default-export */
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import PropTypes from 'prop-types';
// import { Icon } from '../icon';
import { COLORS } from '../variables';
import { Portal } from '../portal';

const wrapperStyles = () => css`
  position: fixed;
  z-index: 999;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  background: rgba(37, 46, 63, 0.72);
  align-items: flex-start;
  justify-content: center;
`;

const modalStyles = ({ width = 400, padding = 20 }) => css`
  background-color: white;
  margin-top: 150px;
  padding: ${padding}px;
  width: ${width}px;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
`;

const modalHeaderStyles = () => css`
  display: flex;
  align-items: center;
  padding: 0px;
  p {
    flex: 1;
  }
`;

const modalContentStyles = () => css`
  padding: 0px;
  min-height: 100px;
`;

const closeButtonStyle = () => css`
  position: absolute;
  cursor: pointer;
  right: 15px;
  top: 10px;
`;

export const Modal = (props) => (
  <div>
    {props.show && (
      <Portal>
        <div css={wrapperStyles(props)} onClick={props.onClose}>
          <div css={modalStyles(props)} onClick={(e) => e.stopPropagation()}>
            {props.showClose && (
              <span css={closeButtonStyle} onClick={props.onClose}>
                {/* <Icon icon="cross" color={COLORS.Neutral.N5} iconSize={20} /> */}
              </span>
            )}
            {props.header && (
              <div css={modalHeaderStyles(props)}>
                <p>{props.headerText}</p>
              </div>
            )}
            <div css={modalContentStyles(props)}>{props.children}</div>
          </div>
        </div>
      </Portal>
    )}
  </div>
);

Modal.propTypes = {
  /**
   * Show modal
   */
  show: PropTypes.bool.isRequired,
//   showClose: PropTypes.bool,
};

Modal.defaulProps = {
  showClose: true,
};
