import React from 'react'
import PropTypes from 'prop-types'
import { MDXProvider } from '@mdx-js/tag'
import SyntaxHighligther from './syntaxHighligther'

const Components = {}
Components.code = SyntaxHighligther

export default class MDXStyler extends React.PureComponent {
  static propTypes = {
    children: PropTypes.node
  }

  render() {
    return (
      <MDXProvider components={Components}>{this.props.children}</MDXProvider>
    )
  }
}
