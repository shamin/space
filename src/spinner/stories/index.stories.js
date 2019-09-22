import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'emotion-theming'
import themes from '../../themes'
import { Spinner } from '..'

storiesOf('Inputs', module)
  .add('Spinner', () => (
    <ThemeProvider theme={themes.light}>
      <Spinner size={36}/>
    </ThemeProvider>
  ))
