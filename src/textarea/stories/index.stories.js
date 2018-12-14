import React from 'react';
import { storiesOf } from '@storybook/react';
import { TextArea } from '..'

storiesOf('Text Area', module)
  .add('simple text area input', () => (
    <TextArea type="text" placeholder="Text area" />
  ))
