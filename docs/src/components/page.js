import React, { Component } from 'react'
import Layout from './layout'

export default class Page extends Component {
  render() {
    return (
      <Layout>
        <div>{this.props.children}</div>
      </Layout>
    )
  }
}
