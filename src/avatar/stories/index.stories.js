import React from 'react';
import { storiesOf } from '@storybook/react';
import { Avatar } from '..'

storiesOf('Avatar', module)
  .add('simple avatar', () => (
    <Avatar />
  ))
