import React from 'react';
import { storiesOf } from '@storybook/react';
import { Toasts } from '..'

storiesOf('Toasts', module)
  .add('simple toast', () => (
    <Toasts />
  ))
