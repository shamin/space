import React, { Component } from "react";
import styled from "styled-components";

const AvatarContainer = styled.div`
  background: #6d6d6d;
  border-radius: 100%;
  width: 100px;
  height: 100px;
`;

export class Avatar extends Component {
  render() {
    return (
      <AvatarContainer>
        <img src="" />
      </AvatarContainer>
    );
  }
}
