import React from "react";
import { storiesOf } from "@storybook/react";
import { Table } from "..";

storiesOf("Table", module).add("normal table", () => (
  <Table>
    <tr>
      <th>Firstname</th>
      <th>Lastname</th>
      <th>Age</th>
    </tr>
    <tr>
      <td>Jill</td>
      <td>Smith</td>
      <td>50</td>
    </tr>
    <tr>
      <td>Eve</td>
      <td>Jackson</td>
      <td>94</td>
    </tr>
  </Table>
));
