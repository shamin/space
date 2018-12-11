import React from "react";

export default class AccordionSection extends React.Component {
  constructor(props) {
    super(props)
    this.onClick = this.onClick.bind(this)
  }
  onClick() {
    this.props.onClick(this.props.label);
  };
  render() {
    const { onClick, props: { isOpen, label } } = this;
    return (
      <div className="accordion">
        <div onClick={onClick} className="accordion-label">
          {label}
          <div className="accordion-icon">x</div>
        </div>
        {isOpen &&
          <div className="accordion-children">
            {this.props.children}
          </div>
        }
      </div>
    )
  }
}
