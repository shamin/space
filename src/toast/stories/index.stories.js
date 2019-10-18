import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ThemeProvider } from 'emotion-theming'
import themes from '../../themes'
import { toast } from '..'

storiesOf('Toast', module)
  .add('Toast', () => (
    <ThemeProvider theme={themes.light}>
      <button onClick={()=>toast.notify()}>Hello Button</button>
    </ThemeProvider>
  ))
