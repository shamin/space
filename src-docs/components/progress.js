import React from 'react';
import { Progress } from '../../src';
import Propsinfo from '../propsInfo';

const ProgressInfo = () => (
  <div>
    <h3>Progress</h3>
    <Progress width={300} progress={50} showText />
    <Propsinfo component={Progress} />
  </div>
);

export default ProgressInfo;
