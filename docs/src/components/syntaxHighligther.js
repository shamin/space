import React from 'react'
import PropTypes from 'prop-types'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/nightOwl'
import styled from 'styled-components'

const Pre = styled.pre`
  padding: 30px;
  border-radius: 3px;
`

export default class SyntaxHighlighter extends React.PureComponent {
  static propTypes = {
    children: PropTypes.string,
  }

  render() {
    return (
      <Highlight
        {...defaultProps}
        code={this.props.children.trim()}
        language="jsx"
        theme={theme}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <Pre className={`${className} syntax-highlight`} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </Pre>
        )}
      </Highlight>
    )
  }
}
