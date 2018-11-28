import React, { Component } from 'react'
import styled from 'styled-components'

export const Table = styled.table`
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
  font-size: 1rem;
  line-height: 1.45rem;
  border-collapse: collapse;
  width: 100%;
  td, th {
  text-align: left;
  border-bottom: 1px solid hsla(0, 0%, 0%, 0.12);
  font-feature-settings: "tnum";
  -moz-font-feature-settings: "tnum";
  -ms-font-feature-settings: "tnum";
  -webkit-font-feature-settings: "tnum";
  padding-left: 0.96667rem;
  padding-right: 0.96667rem;
  padding-top: 0.725rem;
  padding-bottom: calc(0.725rem - 1px);
}
`

// export class Table extends Component {
//   render() {
//     return (
//       <TableStyled>
//         <tr>
//           <th>Firstname</th>
//           <th>Lastname</th>
//           <th>Age</th>
//         </tr>
//         <tr>
//           <td>Jill</td>
//           <td>Smith</td>
//           <td>50</td>
//         </tr>
//         <tr>
//           <td>Eve</td>
//           <td>Jackson</td>
//           <td>94</td>
//         </tr>
//       </TableStyled>
//     )
//   }
// }
