import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import themes from '../../themes'
import { ThemeProvider } from 'emotion-theming'
import { Button } from '..'

storiesOf('Button', module)
  .add('Default Button', () => (
    <ThemeProvider theme={themes.light}>
      <Button onClick={action('clicked')}>Hello Button</Button>
    </ThemeProvider>
  ))
