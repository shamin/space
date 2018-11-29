import React from "react";
import { storiesOf } from "@storybook/react";
import { Select } from "..";

storiesOf("Select", module).add("normal", () => (
  <Select defaultValue="saab">
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="mercedes">Mercedes</option>
    <option value="audi">Audi</option>
  </Select>
));
