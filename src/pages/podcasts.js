import React from "react"
import Layout from "../components/layout"
import Button from "../components/button"
import SEO from "../components/seo"
import { graphql } from 'gatsby'

class Contact extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Podcasts" />
        <h2>Podcasts</h2>
        <a href="https://soundcloud.com/hussamkurd/ep-3-devops">
          <Button marginTop="10px">
            What is DevOps and how to adopt it's culture
          </Button>
        </a>
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
