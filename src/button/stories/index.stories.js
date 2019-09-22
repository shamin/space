import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import themes from '../../themes'
import { ThemeProvider } from 'emotion-theming'
import { Button } from '..'
import { SmallButton } from '../button';

storiesOf('Buttons', module)
  .add('Default Button', () => (
    <ThemeProvider theme={themes.light}>
      <Button onClick={action('clicked')}>Hello Button</Button>
    </ThemeProvider>
  ))
  .add('Disabled Button', () => (
    <ThemeProvider theme={themes.light}>
      <Button onClick={action('clicked')} disabled>Hello Button</Button>
    </ThemeProvider>
  ))
  .add('Icon Button', () => (
    <ThemeProvider theme={themes.light}>
      <Button onClick={action('clicked')}>Hello Button</Button>
    </ThemeProvider>
  ))
  .add('Button Loading', () => (
    <ThemeProvider theme={themes.light}>
      <Button onClick={action('clicked')} loading>Hello Button</Button>
    </ThemeProvider>
  ))
  .add('Small Button', () => (
    <ThemeProvider theme={themes.light}>
      <SmallButton onClick={action('clicked')}>Small Button</SmallButton>
    </ThemeProvider>
  ))
