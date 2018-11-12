import React from 'react';
import { storiesOf } from '@storybook/react';
import { Table } from '..'

storiesOf('Table', module)
  .add('normal table', () => (
    <Table />
  ))
