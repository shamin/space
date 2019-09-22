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

export class Pagination extends Component {
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

function pgntation() {
  const allPages = calculatePage();

}

function calculatePage(pageSize, total) { 
  return Math.floor((total - 1)/ pageSize) + 1
}


const pagination = () => {
  console.log("Pagintaion");
  const state = {
    current: 1,
    pageSize: 10
  };
  const props = {
    current: 2,
    pageSize: 10,
    total: 70
  };
  const { current, pageSize } = state;
  const allPages = calculatePage(undefined, state, props);
  const prevPage = current - 1 > 0 ? current - 1 : 0;
  const nextPage = current + 1 < allPages ? current + 1 : allPages;
};

// const calculatePage = (p, state, props) => {
//   let pageSize = p;
//   if (typeof pageSize === "undefined") {
//     pageSize = state.pageSize;
//   }
//   return Math.floor((props.total - 1) / pageSize) + 1;
// };

// return (
//   <ul
//     className={`${prefixCls} ${prefixCls}-simple ${props.className}`}
//     style={props.style}
//     ref={this.savePaginationNode}
//     {...dataOrAriaAttributeProps}
//   ></ul>)
