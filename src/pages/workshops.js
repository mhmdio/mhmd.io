import React from "react"
import Bio from "../components/bio"
import Layout from "../components/layout"
import Button from "../components/button"
import SEO from "../components/seo"

class Workshop extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="WorkShops" />

        <Bio />
        <p>
          <h2>AWS Community Day MENA 2020:</h2>
          <a href="https://www.youtube.com/watch?v=_qC6XqKzphA">
            <Button marginTop="10px">Day 1 </Button>
          </a>
          <a href="https://www.youtube.com/watch?v=krURNWjIDN4">
            <Button marginTop="10px">Day 2 </Button>
          </a>
        </p>
      </Layout>
    )
  }
}

export default Workshop
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
