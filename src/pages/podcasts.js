import React from "react"
// import { Link } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
// import Button from "../components/button"
import SEO from "../components/seo"

class Contact extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Podcasts" />
        <Bio />
        <h2>Podcasts</h2>
      </Layout>
    )
  }
}

export default Contact
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
