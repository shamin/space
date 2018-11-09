import React from 'react';
import { storiesOf } from '@storybook/react';
import { Select } from '..'

storiesOf('Select', module)
  .add('normal', () => (
    <Select />
  ))
