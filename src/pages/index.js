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
          <span className="sub-2">the</span>{" "}
          <span className="sub-3">Right Way</span>
        </h1>
      </Heading>
      <Video
        thumb={data.thumb.childImageSharp.fluid}
        videoSrc="https://www.youtube.com/embed/2bC_WzRV6VI"
      />
      <Message>
        <p>
          The urgency of our problems needs fresh, bold and the right solutions.
        </p>
        <br />

        <p>
          I am running as a Candidate for Parliament for the Tema Central
          Constituency to champion bold ideas and the right way of doing things.
        </p>
        <br />

        <p>
          I believe we can provide nonpartisan and fair opportunities to all
          people of Tema Central, not just few.
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
    font-weight: 600;

    @media screen and (min-width: 768px) {
      font-size: 70px;
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
  color: var(--text-color);

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
