import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Nav from "./Nav"
import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { title, children } = this.props
    // const rootPath = `${__PATH_PREFIX__}/`
    // const blogPath = `${__PATH_PREFIX__}/blog/`
    let header
    header = (
      <h1
        style={{
          ...scale(1),
          marginBottom: rhythm(1),
          textAlign: `center`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
        {" "}||
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`https://docs.mhmd.io`}
        >
        {" "}openDocs
        </Link>
      </h1>
    )
    // if (location.pathname === rootPath || location.pathname === blogPath) {
    //   header = (
    //     <h1
    //       style={{
    //         ...scale(1.5),
    //         marginBottom: rhythm(1.5),
    //         marginTop: 0,
    //       }}
    //     >
    //       <Link
    //         style={{
    //           boxShadow: `none`,
    //           textDecoration: `none`,
    //           color: `inherit`,
    //         }}
    //         to={location.pathname === blogPath ? `/blog/` : `/`}
    //       >
    //         {title}
    //       </Link>
    //     </h1>
    //   )
    // } else {
    //   header = (
    //     <h3
    //       style={{
    //         fontFamily: `Montserrat, sans-serif`,
    //         marginTop: 0,
    //       }}
    //     >
    //       <Link
    //         style={{
    //           boxShadow: `none`,
    //           textDecoration: `none`,
    //           color: `inherit`,
    //         }}
    //         to={`/blog/`}
    //       >
    //         {title}
    //       </Link>
    //     </h3>
    //   )
    // }
    return (
      <Wrapper>
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(29),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
            backgroundColor: "var(--bg)",
            color: "var(--textNormal)",
            transition: "color 0.2s ease-out, background 0.2s ease-out",
          }}
        >
          <header>{header}</header>
          <Nav />
          <main>{children}</main>
        </div>
        <Footer
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(29),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
            backgroundColor: "var(--bg)",
            color: "var(--textNormal)",
            transition: "color 0.2s ease-out, background 0.2s ease-out",
          }}
        >
          © 2015 - {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>, Hosted on{" "}
          <a href="https://www.netlify.com/">Netlify</a>, Protected with{" "}
          <a href="https://www.cloudflare.com/">Cloudflare</a>
        </Footer>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
`

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`

export default Layout
