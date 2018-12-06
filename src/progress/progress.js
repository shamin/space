import styled from "styled-components";

export const Progress = styled.div`
  background: #f1f2f6;
  width: 200px;
  height: 10px;
  position: relative;
  &::after{
    content: "";
    position: absolute;
    background: #5f27cd;
    width: ${props => props.percentage ? `${props.percentage}%` : `10%`};;
    height: 100%;  
  }
`;
