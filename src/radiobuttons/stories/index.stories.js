import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { RadioButton } from '..'

storiesOf('Radio Button', module)
  .add('radio button', () => (
    <RadioButton label="radio" checked />
  ))
