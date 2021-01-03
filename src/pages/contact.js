import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"

class Contact extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Contact" />
        <form method="post" netlify-honeypot="bot-field" data-netlify="true">
          <p>
            <label>
              Name <input type="text" name="name" id="name" />
            </label>
          </p>
          <p>
            <label>
              Email <input type="email" name="email" id="email" />
            </label>
          </p>
          <p>
            <label>
              Subject <input type="text" name="subject" id="subject" />
            </label>
          </p>
          <p>
            <textarea name="message" id="message" rows="5" />
          </p>
          <button type="submit">Send </button>
          <input type="reset" value="Clear" />
        </form>
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
