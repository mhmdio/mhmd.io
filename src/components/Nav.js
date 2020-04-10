// Nav.js
import React from "react"
import styled from "styled-components"

const Nav = () => (
  <nav>
    <Wrapper>
      <a href="/" style={{ textDecoration: "none" }}>
        Home
      </a>
      | <a href="/blog">Blog</a> | <a href="/about">About</a> |{" "}
      <a href="/contact">Contact</a>
    </Wrapper>
  </nav>
)

export default Nav

const Wrapper = styled.h3`
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`
