import styled from "styled-components";

export const Breadcrumb = styled.ul`
  padding: 10px 16px;
  list-style: none;
  li{
    display: inline;
    a{
      text-decoration: none;
      color: #000;
    }
  }
  li+li:before {
    padding: 3px;
    color: black;
    content: "/\00a0";
    a{
      text-decoration: none;
      color: #000;
    }
  }
`;

