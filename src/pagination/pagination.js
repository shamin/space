import React, { Component } from "react";
import styled from "styled-components";

const PaginationLinks = styled.ul`
  list-style: none;
  li {
    display: inline;
    padding: 10px;
    &.active {
      background: #5f27cd;
      color: #ffffff;
    }
  }
`;

export class Pagination extends React.Component {
  render() {
    return (
      <PaginationLinks>
        {this.props.pages.map(page => (
          <li className={page === this.props.currentpage ? "active" : ""}>
            {page}
          </li>
        ))}
      </PaginationLinks>
    );
  }
}
