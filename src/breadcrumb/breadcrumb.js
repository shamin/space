import React, { Component } from "react";
import styled from "styled-components";

const BreadcrumbContainer = styled.ul`

`;

export class Breadcrumb extends Component {
  render() {
    return (
      <BreadcrumbContainer>
        <li>Home</li>  
        <li>About</li>  
      </BreadcrumbContainer>
    );
  }
}
