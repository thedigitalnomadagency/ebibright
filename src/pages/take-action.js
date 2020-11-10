import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { styled } from "twin.macro"

//components
import Layout from "../components/Layout"
import Connect from "../components/Connect"
import Video from "../components/Video"

export default () => {
  const data = useStaticQuery(graphql`
    {
      thumb: file(relativePath: { eq: "intro-thumb.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Title>Campaign Ad</Title>
      <Vid
        thumb={data.thumb.childImageSharp.fluid}
        videoSrc="https://www.youtube.com/embed/Q5FyhOmRQOA"
      />
      <Title>Campaign Song</Title>
      <Vid
        thumb={data.thumb.childImageSharp.fluid}
        videoSrc="https://www.youtube.com/embed/Q5FyhOmRQOA"
      />
      <Title>Go Vote</Title>
      <Vid
        thumb={data.thumb.childImageSharp.fluid}
        videoSrc="https://www.youtube.com/embed/Q5FyhOmRQOA"
      />
      <Connect />
    </Layout>
  )
}

const Vid = styled(Video)`
  padding-bottom: 10px;
`

const Title = styled.h1`
  font-size: 26px;
  font-weight: 700;
  line-height: 2.5;
  padding-left: 10px;
`
