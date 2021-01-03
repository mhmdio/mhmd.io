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
        <SEO title="Courses" />
        <p>
          <h2>Paid on Upwork:</h2>
          <a href="https://www.upwork.com/services/my-list/1323160849474355200">
            <Button marginTop="10px">
              You will get 5 hours of Terraform Training on AWS
            </Button>
          </a>
          Note: You need to have Upwork account.
        </p>
        <p>
          <h2>Free on YouTube:</h2>
          <a href="https://www.youtube.com/watch?v=cju7bDO_-i0">
            <Button marginTop="10px">
              How to Use Open Source Tools to Improve Network Security
            </Button>
          </a>
          <a href="https://www.youtube.com/watch?v=t8hFq99XIlk&t=1730s">
            <Button marginTop="10px">DevOps in Simple Arabic</Button>
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
