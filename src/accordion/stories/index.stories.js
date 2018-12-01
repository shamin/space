import React from 'react';
import { storiesOf } from '@storybook/react';
import { Accordion } from '..'

storiesOf('Accordion', module)
  .add('simple accordion', () => (
    <Accordion />
  ))
