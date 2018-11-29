import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Sidebar from './sidebar'

const App = styled.div`
  font-family: monospace;
`

const Container = styled.div`
  margin-left: 300px;
  padding: 50px;
  max-width: 1000px;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <App>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Minimal react library' },
            { name: 'keywords', content: 'minimal, react, ui, design' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Sidebar siteTitle={data.site.siteMetadata.title} />
        <Container>{children}</Container>
      </App>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
