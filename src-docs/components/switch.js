import React, { useState } from 'react';
import { Switch } from '../../src';
import Propsinfo from '../propsInfo';

const SwitchInfo = () => {
  const [checked, setChecked] = useState();
  return (
    <div>
      <h3>Switches</h3>
      <div className="components-inline">
        <div className="component">
          <Switch
            label="Switch"
            onChange={() => {
              setChecked(!checked);
            }}
            checked={checked}
          />
        </div>
      </div>
      <Propsinfo component={Switch} />
    </div>
  );
};

export default SwitchInfo;

