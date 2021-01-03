import React from "react"
import Layout from "../components/layout"
import Button from "../components/button"
import SEO from "../components/seo"
import { graphql } from "gatsby"

class About extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Slides" />
        <p>
          <h2>SpeakerDeck:</h2>
          <a href="https://speakerdeck.com/mhmdio/terraform-cicd-best-practices">
            <Button marginTop="10px">
              Terraform CICD Best Practices using AWS Developer tools.
            </Button>
          </a>
          <h2>SlideShare:</h2>
          <a href="https://www.slideshare.net/MohammedAlmusaddar/how-to-use-open-source-tools-to-improve-network-security">
            <Button marginTop="10px">
              How to Use Open Source Tools to Improve Network Security
            </Button>
          </a>
          <h2>Google Slides:</h2>
          <a href="https://drive.google.com/drive/folders/14q1wsSUq7eS_zJxUqpDftLPFkarNrEPR?usp=sharing">
            <Button marginTop="10px">Freelancing Training Course</Button>
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
