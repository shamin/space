import React, { Component } from "react";
import styled from "styled-components";

const AccordionHeader = styled.div`

`;

const AccordionItem = styled.div`

`

const AccordionBody = styled.ul`
  list-style: none;
`

export class Accordion extends React.Component {
  render() {
    return (
      <div>
        <AccordionItem>
          <AccordionHeader>Elements</AccordionHeader>
          <AccordionBody>
            <li>Element 1</li>
            <li>Element 2</li>
            <li>Element 3</li>
          </AccordionBody>
        </AccordionItem>
      </div>
    );
  }
}
