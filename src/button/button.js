import React from 'react'
/** @jsx jsx */
import { jsx } from '@emotion/core'

export const Button = (props) => (
  <button css={theme => ({background: theme.colors.primary})}>Test</button>
)
