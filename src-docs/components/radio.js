import React, { useState } from 'react';
import { Radio } from '../../src';
import Propsinfo from '../propsInfo';

const RadioInfo = () => {
  const [checked, setChecked] = useState();
  return (
    <div>
      <h3>Radio</h3>
      <div className="components-inline">
        <div className="component">
          <Radio
            label="Radio"
            onChange={() => {
              setChecked(!checked);
            }}
            checked={checked}
          />
        </div>
      </div>
      <Propsinfo component={Radio} />
    </div>
  );
};

export default RadioInfo;
