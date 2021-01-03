import React from "react"
import Layout from "../components/layout"
import Button from "../components/button"
import SEO from "../components/seo"
import { graphql } from "gatsby"

class Links extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Links" />
        <p>
          <h2>Recommended Books:</h2>
          <a href="https://itrevolution.com/book/the-phoenix-project/">
            <Button marginTop="10px">THE PHOENIX PROJECT </Button>
          </a>
          <a href="https://www.terraformupandrunning.com/">
            <Button marginTop="10px">Terraform: Up & Running </Button>
          </a>
          <a href="https://www.ansiblefordevops.com/">
            <Button marginTop="10px">Ansible for DevOps </Button>
          </a>
          <a href="https://landing.google.com/sre/books/">
            <Button marginTop="10px">Google's SRE Books </Button>
          </a>
        </p>
        <p>
          <h2>Recommended Roadmaps:</h2>
          <a href="https://roadmap.sh/devops">
            <Button marginTop="10px">DevOps Roadmap </Button>
          </a>
        </p>
        <p>
          <h2>Challenges:</h2>
          <a href="https://github.com/hashicorp/workshop-puzzles">
            <Button marginTop="10px">Terraform workshop-puzzles </Button>
          </a>
          <a href="http://flaws.cloud/">
            <Button marginTop="10px">flAWS challenge </Button>
          </a>
          <a href="https://cisco-network-challenge.firebaseapp.com/">
            <Button marginTop="10px">Mars Network challenge </Button>
          </a>
        </p>
      </Layout>
    )
  }
}

export default Links

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
