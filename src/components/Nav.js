// Nav.js
import React from "react"
import styled from "styled-components"

const Nav = () => (
  <nav>
    <Wrapper>
      <a href="/">Home</a>| <a href="/blog">Blog</a> |{" "}
      <a href="/slides">Slides</a>| <a href="/courses">Courses</a>|{" "}
      <a href="/podcasts">Podcasts</a>| <a href="/about">About</a> |{" "}
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
