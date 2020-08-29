import React from 'react';
import { Pill } from '../../src';
import PropsInfo from '../propsInfo';

const PillInfo = () => (
  <div>
    <h3>Pills</h3>
    <Pill number={10} />
    <PropsInfo component={Pill} />
  </div>
);

export default PillInfo;
