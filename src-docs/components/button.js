import React from 'react';
import { Button } from '../../src';
import Propsinfo from '../propsInfo';

const ButtonInfo = () => (
  <div>
    <h3>Buttons</h3>
    {/* <Button text="Hello" background="red"/> */}
    <div className="components-inline">
      <div className="component">
        <Button text="Primary" />
      </div>
    </div>
    <Propsinfo component={Button} />
  </div>
);

export default ButtonInfo;
