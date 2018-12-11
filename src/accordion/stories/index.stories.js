import React from "react";
import { storiesOf } from "@storybook/react";
import { Accordion } from "..";

storiesOf("Accordion", module).add("simple accordion", () => (
  <Accordion>
    <div label="Accodion 1" isOpen>
      <div className="checkbox">
        <label>
          <input type="checkbox" value="" />
          Option 1
        </label>
      </div>
      <div className="checkbox">
        <label>
          <input type="checkbox" value="" />
          Option 2
        </label>
      </div>
      <div className="checkbox">
        <label>
          <input type="checkbox" value="" />
          Option 3
        </label>
      </div>
    </div>
    <div label="Accodion 2">
      <div className="checkbox">
        <label>
          <input type="checkbox" value="" />
          Option 1
        </label>
      </div>
      <div className="checkbox">
        <label>
          <input type="checkbox" value="" />
          Option 2
        </label>
      </div>
      <div className="checkbox">
        <label>
          <input type="checkbox" value="" />
          Option 3
        </label>
      </div>
    </div>
  </Accordion>
));
