import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { Link } from 'gatsby'
import { Button } from '../../../src'

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    background: #f1f2f6;
  }
`

const Container = styled.div`
  font-family: monospace;
  padding: 40vh 0;
  text-align: center;
`

const IndexPage = () => (
  <Container>
    <GlobalStyle />
    <h1>Space</h1>
    <p>Minimal react ui library</p>
      <Link to="/docs"><Button>Documentation</Button></Link>
  </Container>
)

export default IndexPage
