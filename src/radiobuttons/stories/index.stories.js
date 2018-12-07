import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { RadioButton } from '..'

storiesOf('Checkbox', module)
  .add('radio button', () => (
    <RadioButton label="Checkbox" checked />
  ))
