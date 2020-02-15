import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "MYM🚀"

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
        <p>
          I’m Mohammed Yahya [Almusaddar][محمد يحيى المصدر], from Gaza,
          Palestine.
        </p>
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
        <p>
          <a href="https://www.upwork.com/fl/mhmdio">
            <Button marginTop="10px">Hire me on UpWork</Button>
          </a>
        </p>
      </Layout>
    )
  }
}

export default IndexPage
