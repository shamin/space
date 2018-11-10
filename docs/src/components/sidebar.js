import React from "react"
import { StaticQuery, graphql } from 'gatsby'


const Sidebar = () => (
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
      <>
        <div>All components{
          data.allMdx.edges.map(edge => (
            <a href={edge.node.frontmatter.path} key={edge.node.id}>{edge.node.frontmatter.title}</a>
          ))}</div>
      </>
    )}
  />)

export default Sidebar
