import React, { Component } from "react";
import styled from "styled-components";

const LoaderContainer = styled.div`
  width: 60px;
  height: 60px;
  padding-left: 60px;
`
const Load = styled.div`
  width: 30px;
  height: 30px;
  border-top-right-radius: 30px;
  border: 5px solid #5f27cd;
  border-left: 0;
  border-bottom: 0;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  animation: spin 1s linear infinite;
  transform-origin: 0% 100%;
  @-moz-keyframes spin {
    100% {
      -moz-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

export const Loader = ()=>(
  <LoaderContainer>
    <Load/>
  </LoaderContainer>
)
