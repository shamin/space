import React from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import PropTypes from 'prop-types';

const baseStyles = (props) => css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 300px;
  span {
    max-width: 300px;
  }
`

const BaseButton = props => (
  <div
    css={baseStyles(props)}
    {...props} />
)

export const Container = (props) => {
  const newProps = {
    ...props,
  }
  return (
    <BaseButton {...newProps} />
  )
}
