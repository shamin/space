import React, { Component } from "react";
import styled from "styled-components";

const PaginationLinks = styled.ul`
  padding: 0;
  list-style: none;
  display: inline;
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
      <div>
        <a>previous</a>
        <PaginationLinks>
          {this.props.pages.map(page => (
            <li className={page === this.props.currentpage ? "active" : ""}>
              {page}
            </li>
          ))}
        </PaginationLinks>
        <a>next</a>
      </div>
    );
  }
}
