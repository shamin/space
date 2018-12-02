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
  constructor(props) {
    super(props);
    this.itemClick = this.itemClick.bind(this)
  }
  itemClick(page) {
    this.props.onItemClick(page)
  }
  render() {
    const { currentpage } = this.props
    return (
      <div>
        <a onClick={()=>{this.itemClick(currentpage-1)}}>previous</a>
        <PaginationLinks>
          {this.props.pages.map(page => (
            <li key={page} className={page === currentpage ? "active" : ""} onClick={()=>{this.itemClick(page)}}>
              {page}
            </li>
          ))}
        </PaginationLinks>
        <a onClick={()=>{this.itemClick(currentpage+1)}}>next</a>
      </div>
    );
  }
}
