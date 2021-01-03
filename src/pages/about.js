import React from "react"
import Bio from "../components/bio"
import Layout from "../components/layout"
import Button from "../components/button"
import SEO from "../components/seo"
import { graphql } from 'gatsby'

class About extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="About" />

        <Bio />
        <p>
          <a href="https://www.youracclaim.com/users/mohammed-almusaddar/badges">
            <Button marginTop="10px">Acclaim Badges/Certs</Button>
          </a>
          <a href="https://github.com/mhmdio">
            <Button marginTop="10px">Fork on Github</Button>
          </a>
          <a href="https://twitter.com/mhmd_io">
            <Button marginTop="10px">Follow on Twitter</Button>
          </a>
          <a href="https://www.youtube.com/channel/UCbwcohrMkjVdG2dxHPHfElw">
            <Button marginTop="10px">Subscribe on YouTube</Button>
          </a>
          <a href="https://www.linkedin.com/in/mhmdio">
            <Button marginTop="10px">Connect on LinkedIn</Button>
          </a>
          <a href="https://keybase.io/mhmd">
            <Button marginTop="10px">Verify on keybase</Button>
          </a>
          <a href="https://learn.acloud.guru/profile/mohammed-yahya">
            <Button marginTop="10px">ACG Academic Transcript</Button>
          </a>
          <a href="https://www.freecodecamp.org/mhmdio">
            <Button marginTop="10px">fCC Academic Transcript</Button>
          </a>
          <a href="https://www.upwork.com/fl/mhmdio">
            <Button marginTop="10px">Hire on UpWork</Button>
          </a>
          <a href="https://paypal.me/mhmdio">
            <Button marginTop="10px">Support with paypal.me</Button>
          </a>
        </p>
      </Layout>
    )
  }
}

export default About

// // Create the keyframes
// const rotate = keyframes`
//   from {
//     transform: rotate(0deg);
//   }
//   to {
//     transform: rotate(360deg);
//   }
// `
// // Here we create a component that will rotate everything we pass in over two seconds
// const Rotate = styled.div`
//   display: inline-block;
//   animation: ${rotate} 2s linear infinite;
//   padding: 2rem 1rem;
//   font-size: 1.2rem;
// `

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
