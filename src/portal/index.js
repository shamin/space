/* eslint-disable import/prefer-default-export */
import React from 'react';
/** @jsx jsx */
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';

export class Portal extends React.Component {
  constructor(props) {
    super(props)
    this.portalNode = document.createElement('div');
    document.body.appendChild(this.portalNode);
  }

  componentWillUnmount() {
    if (this.portalNode.parentNode) {
      this.portalNode.parentNode.removeChild(this.portalNode);
    }
  }

  render () {
    return createPortal(this.props.children, this.portalNode);
  }
}

Portal.propTypes = {
  children: PropTypes.node,
}
