import React from 'react';
import { Button } from '../../src';
import Propsinfo from '../propsInfo';

const ButtonInfo = () => (
  <div>
    <h3>Buttons</h3>
    <div className="components-inline">
      <div className="component">
        <Button text="Primary" onClick={() => {}} />
      </div>
    </div>
    <Propsinfo component={Button} />
  </div>
);

export default ButtonInfo;
