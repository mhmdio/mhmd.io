import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "mhmd.io 🚀"

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
        {/* <img style={{ margin: 0 }} src="./GatsbyScene.svg" alt="Gatsby Scene" /> */}
        <h1>
          Salam people{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h1>
        <p>I’m Mohammed Yahya, from Gaza, Palestine.</p>
        <p>
          I’m working on Developing Cloud Solutions and Automation Projects
          using Pulumi, Terraform, Vault, Ansible and other Open Source tools.
        </p>
        <Link to="/blog/">
          <Button marginTop="10px">Go to Blog</Button>
        </Link>
        {/* <Link to="/images/">
          <Button marginTop="10px">Go to Images</Button>
        </Link>
        <Link to="/services/">
          <Button marginTop="10px">Go to Services</Button>
        </Link> */}
      </Layout>
    )
  }
}

export default IndexPage
