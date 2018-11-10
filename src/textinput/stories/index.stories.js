import React from 'react';
import { storiesOf } from '@storybook/react';
import { TextInput } from '..'

storiesOf('TextInput', module)
  .add('simple text input', () => (
    <TextInput type="text" />
  ))
