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
                title
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
            <div key={edge.node.id}>{edge.node.frontmatter.title}</div>
          ))}</div>
      </>
    )}
  />)

export default Sidebar
