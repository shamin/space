import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Checkbox } from '..'

storiesOf('Checkbox', module)
  .add('checked', () => (
    <Checkbox label="Checkbox" checked />
  ))
  .add('not checked', () => (
    <Checkbox label="Checkbox" />
  ))
  .add('disabled', () => (
    <Checkbox label="Checkbox" disabled/>
  ))
