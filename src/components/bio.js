/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"

import { rhythm } from "../utils/typography"

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        // const { author, twitter } = data.site.siteMetadata
        const { author } = data.site.siteMetadata
        return (
          <Container>
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                marginRight: rhythm(1 / 5),
                marginBottom: 50,
                minWidth: 50,
                borderRadius: `10%`,
              }}
              imgStyle={{
                borderRadius: `10%`,
              }}
            />
            👋 Salam people, I’m Mohammed Yahya [Almusaddar][محمد يحيى المصدر],
            from Gaza, Palestine. I’m working on Developing Cloud Solutions and
            Automation Projects using Pulumi, Terraform, Vault, Ansible and
            other Open Source tools.
          </Container>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/mym.png/" }) {
      childImageSharp {
        fixed(width: 70, height: 70) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        twitter
      }
    }
  }
`

const Container = styled.div`
  display: flex;
`

export default Bio
