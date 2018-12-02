import React from 'react';
import { storiesOf } from '@storybook/react';
import { Pagination } from '..'

storiesOf('Pagination', module)
  .add('simple pagination', () => (
    <Pagination pages={[1,2,3,4,5]} currentpage={2}/>
  ))
