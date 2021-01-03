// Nav.js
import React from "react"
import styled from "styled-components"
import Switch from "../components/switch"

const Nav = () => (
  <nav>
    <Wrapper>
      <a href="/">Home</a> | <a href="/blog">Blog</a> |{" "}
      <a href="/about">About</a> | <a href="/podcasts">Podcasts</a> |{" "}
      <a href="/workshops">Workshops</a> | <a href="/slides">Slides</a> |{" "}
      <a href="/courses">Courses</a> | <a href="/links">Links</a> |{" "}
      <a href="/services">Services</a> | <a href="/contact">Contact</a>|{" "}
      <Switch />
    </Wrapper>
  </nav>
)

export default Nav

const Wrapper = styled.div`
  text-decoration: none;
  text-align: center;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`
