import React from "react"
import { StaticQuery, graphql } from 'gatsby'
import { Link } from 'gatsby'
import styled from "styled-components"

const Logo = styled.div`
  padding: 20px 0px;
  > a{
    text-decoration: none;
    color: #000;
    font-size: 2rem;
  }
`

const SideItems = styled.ul`
  padding: 20px 10px;
  list-style: none;
  margin-left: 0px;
  > li{  
    a{
      text-decoration: none;
      color: #5f27cd;
    }
  }
`

const SidebarStyle = styled.div`
  background: #f1f2f6;
  position: fixed;
  top: 0;
  height: 100%;
  width: 300px;
  padding: 20px;
`

const Sidebar = ({ siteTitle }) => (
  <StaticQuery
    query={graphql`
      query {
        allMdx {
          edges {
            node {
              id
              frontmatter {
                title,
                path
              }
            }
          }
        }
      }      
    `}
    render={data => (
      <SidebarStyle>
        <Logo style={{ margin: 0 }}>
          <Link
            to="/"
          >
            {siteTitle}
          </Link>
        </Logo>
        <div>Components</div>
        <SideItems>
          {
            data.allMdx.edges.map(edge => (
              <li><a href={edge.node.frontmatter.path} key={edge.node.id}>{edge.node.frontmatter.title}</a></li>
            ))
          }
        </SideItems>
      </SidebarStyle>
    )}
  />)

export default Sidebar
