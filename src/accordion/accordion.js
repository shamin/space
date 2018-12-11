import React from "react";
import AccordionSection from './accordionsection'

export class Accordion extends React.Component {
  constructor(props) {
    super(props);

    const openSections = {};

    this.props.children.forEach(child => {
      if (child.props.isOpen) {
        openSections[child.props.label] = true;
      }
    });

    this.state = { openSections };
    this.accordionClick = this.accordionClick.bind(this)
  }

  accordionClick(label) {
    const { openSections } = this.state
    const isOpen = !!openSections[label];
    this.setState({
      openSections: {
        [label]: !isOpen
      }
    });
  }
  render() {
    const {
      props: { children },
      state: { openSections },
    } = this;
    return (
      <div className="group">
        {children.map(child => (
          <AccordionSection
            isOpen={!!openSections[child.props.label]}
            label={child.props.label}
            onClick={this.accordionClick}
            key={child.props.label}
          >
            {child.props.children}
          </AccordionSection>
        ))}
      </div>
    )
  }
}
