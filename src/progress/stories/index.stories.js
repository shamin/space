import React from 'react';
import { storiesOf } from '@storybook/react';
import { Progress } from '..'

storiesOf('Progress', module)
  .add('simple progress', () => (
    <Progress />
  ))
