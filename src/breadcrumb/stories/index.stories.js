import React from 'react';
import { storiesOf } from '@storybook/react';
import { Breadcrumb } from '..'

storiesOf('Breadcrumb', module)
  .add('simple breadcrump', () => (
    <Breadcrumb>
      <li>Home</li>
      <li>About</li>
    </Breadcrumb>
  ))
