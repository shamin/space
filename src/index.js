import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button, TomatoButton } from './button/button'

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('tomato Button', () => (
    <TomatoButton onClick={action('clicked')}>Hello Button</TomatoButton>
  ))
