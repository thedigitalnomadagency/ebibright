import React from "react"
import { styled } from "twin.macro"
import { useStaticQuery, graphql } from "gatsby"

//components
import Layout from "../components/Layout"
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
      <Heading>
        <h1 className="heading">
          <span className="sub-1">Together</span>{" "}
          <span className="sub-2">The</span>{" "}
          <span className="sub-3">Right Way</span>
        </h1>
      </Heading>
      <Video
        thumb={data.thumb.childImageSharp.fluid}
        videoSrc="https://www.youtube.com/embed/2bC_WzRV6VI"
      />
      <Message>
        <p>
          The urgency of our problems needs fresh, bold and the right solutions!
        </p>
        <br />

        <p>
          I am running to be a Member of Parliament to champion bold ideas and
          the right way of doing things. So together we can provide fair and
          nonpartisan opportunities to all people of Tema Central Constituency,
          not just a few.
        </p>
        <br />

        <p>
          I call my 2020 Election Campaign for the Tema Central Constituency
          seat <span className="sub-3">THE</span>{" "}
          <span className="sub-1">RIGHT</span>{" "}
          <span className="sub-2">CAMPAIGN</span>. This is because, for me
          having lived in Tema Central for 27 years, serving my constituents is
          not just about who can make a difference, but who can make the right
          difference.
        </p>
        <br />

        <p>
          I grew up believing that Tema is the best place to live in Ghana. I am
          ready to work with the people of Tema Central to make our constituency
          the envy of all other constituencies.
        </p>
      </Message>
    </Layout>
  )
}

const Heading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .heading {
    display: inline-block;
    margin: 0 auto;
    text-align: center;
    font-size: 30px;
    padding: 10px;

    @media screen and (min-width: 768px) {
      font-size: 50px;
    }
  }

  .sub-1 {
    color: var(--ndc-red);
  }

  .sub-2 {
    color: var(--ndc-black);
  }

  .sub-3 {
    color: var(--ndc-green);
  }
`

const Message = styled.div`
  padding: 20px;
  font-size: 20px;

  .sub-1 {
    color: var(--ndc-red);
  }

  .sub-2 {
    color: var(--ndc-black);
  }

  .sub-3 {
    color: var(--ndc-green);
  }
`
