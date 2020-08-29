/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React from 'react';

const PropsInfo = ({ component }) => (
  <div>
    <h5>Props Table</h5>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Required</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(component.__docgenInfo.props).map(([key, value]) => {
          return (
            <tr key={key}>
              <td>{key}</td>
              <td>{value.type.name}</td>
              <td>{value.required ? "true" : "false"}</td>
              <td>{value.description}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  </div>
);

export default PropsInfo
