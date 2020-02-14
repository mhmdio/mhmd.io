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
        <p>
          {" "}
          <Link to="/blog/">
            <Button marginTop="10px">Go to Blog</Button>
          </Link>
        </p>

        <p>
          <a href="https://twitter.com/mhmd_io">
            <Button marginTop="10px">Follow me on Twitter</Button>
          </a>
        </p>
        <p>
          <a href="https://www.linkedin.com/in/mhmdio">
            <Button marginTop="10px">Connect on LinkedIn</Button>
          </a>
        </p>
        <p>
          <a href="https://keybase.io/mhmd">
            <Button marginTop="10px">Verify me on keybase</Button>
          </a>
        </p>
        <p>
          <a href="https://learn.acloud.guru/profile/mohammed-yahya">
            <Button marginTop="10px">ACG Academic Transcript</Button>
          </a>
        </p>
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
