import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"

class About extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Services" />
        <p>
          <h2>DevSecOps:</h2>
          Using DevOps to Secure Your Infrastructure as Code
        </p>
        <p>
          <h2>Training:</h2>
          DevSecOps Training
        </p>
      </Layout>
    )
  }
}

export default About
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
