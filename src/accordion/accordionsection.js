import React from "react";
import styled from "styled-components";

const Styles = styled.div`
  .accordion-label {
    background: #f4f4f4;
    padding: 10px;
    position: relative;
    .accordion-icon {
      position: absolute;
      right: 10px;
      top: 10px;
    }
  }
  .accordion-children {
    background: #f5f5f5;
    border: 2px solid #9e9e9e;
    padding: 10px 20px;
  }
`;

export default class AccordionSection extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    this.props.onClick(this.props.label);
  }
  render() {
    const {
      onClick,
      props: { isOpen, label }
    } = this;
    return (
      <Styles>
        <div onClick={onClick} className="accordion-label">
          {label}
          <div className="accordion-icon">x</div>
        </div>
        {isOpen && (
          <div className="accordion-children">{this.props.children}</div>
        )}
      </Styles>
    );
  }
}
