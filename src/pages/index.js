import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[
            `blog`,
            `mohammed`,
            `yahya`,
            `almusaddar`,
            `website`,
            `terraform`,
            `ansible`,
            `vault`,
            `pulumi`,
          ]}
        />
        <h1>
          Salam people{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h1>
        <p>
          I’m Mohammed Yahya [Almusaddar][محمد يحيى المصدر], from Gaza,
          Palestine. I’m working on Developing Cloud Solutions and Automation
          Projects using Pulumi, Terraform, Vault, Ansible and other Open Source
          tools.
        </p>
        <img
          style={{ margin: 0 }}
          src="./devops-toolchain.svg"
          alt="DevOps ToolChain"
        />
      </Layout>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
