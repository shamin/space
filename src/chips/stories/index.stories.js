import React from 'react';
import { storiesOf } from '@storybook/react';
import { Chips } from '..'

storiesOf('Chips', module)
  .add('chips', () => (
    <>
    <Chips>Thanos</Chips>
    <Chips>Deadpool</Chips>
    </>
  ))
