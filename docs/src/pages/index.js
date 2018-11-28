import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Container = styled.div`
  padding: 40vh 0;
  background: #f1f2f6;
  height: 100vh;
  text-align: center;
`

const Button = styled.a`
  background: transparent;
  padding: 7px 20px;
  border: 1px solid #5f27cd;
  display: inline;
  text-decoration: none;
  color: #5f27cd;
  transition: 0.5s ease;
  &:hover{
    background: #5f27cd;
    color: #f1f2f6;
  }
`

const IndexPage = () => (
  <Container>
    <h1>Space</h1>
    <p>Minimal react ui library</p>
      <Button href="/docs">Documentation</Button>
  </Container>
)

export default IndexPage
