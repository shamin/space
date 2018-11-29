import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { Button } from '../../../src'

const Container = styled.div`
  font-family: monospace;
  padding: 40vh 0;
  background: #f1f2f6;
  max-height: 100vh;
  text-align: center;
`

const IndexPage = () => (
  <Container>
    <h1>Space</h1>
    <p>Minimal react ui library</p>
      <Link to="/docs"><Button>Documentation</Button></Link>
  </Container>
)

export default IndexPage
