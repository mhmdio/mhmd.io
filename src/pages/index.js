import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="LZ"
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
        <img
          style={{ margin: 0 }}
          src="./devops-toolchain.svg"
          alt="DevOps ToolChain"
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
        <p>
          <Link to="/blog/">
            <Button marginTop="10px">Go to Blog</Button>
          </Link>
          <a href="https://github.com/mhmdio">
            <Button marginTop="10px">Fork me on Github</Button>
          </a>
          <a href="https://twitter.com/mhmd_io">
            <Button marginTop="10px">Follow me on Twitter</Button>
          </a>
          <a href="https://www.linkedin.com/in/mhmdio">
            <Button marginTop="10px">Connect on LinkedIn</Button>
          </a>
          <a href="https://keybase.io/mhmd">
            <Button marginTop="10px">Verify me on keybase</Button>
          </a>
          <a href="https://learn.acloud.guru/profile/mohammed-yahya">
            <Button marginTop="10px">ACG Academic Transcript</Button>
          </a>
          <a href="https://www.freecodecamp.org/mhmdio">
            <Button marginTop="10px">fCC Academic Transcript</Button>
          </a>
          <a href="https://www.upwork.com/fl/mhmdio">
            <Button marginTop="10px">Hire me on UpWork</Button>
          </a>
          <a href="https://paypal.me/mhmdio">
            <Button marginTop="10px">Support me with paypal.me</Button>
          </a>
        </p>
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
