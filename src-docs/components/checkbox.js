import React, { useState } from 'react';
import { Checkbox } from '../../src';
import Propsinfo from '../propsInfo';

const CheckboxInfo = () => {
  const [checked, setChecked] = useState();
  return (
    <div>
      <h3>Checkboxes</h3>
      <div className="components-inline">
        <div className="component">
          <Checkbox
            label="Checkbox"
            onChange={() => {
              setChecked(!checked);
            }}
            checked={checked}
          />
        </div>
      </div>
      <Propsinfo component={Checkbox} />
    </div>
  );
};

export default CheckboxInfo;
