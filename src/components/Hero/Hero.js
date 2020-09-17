import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

//styling
import Wrapper from "./Hero.styles"

const getImage = graphql`
  {
    fluid: file(relativePath: { eq: "hero.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`

export default () => {
  const {
    fluid: { childImageSharp: fluid },
  } = useStaticQuery(getImage)

  return (
    <Wrapper>
      <div className="inner-wrapper">
        <div className="image-box">
          <Img fluid={fluid.fluid} className="image" />
        </div>
        <div className="message">
          <h1 className="heading">
            <span className="sub-1">Together </span>
            <span className="sub-2">the </span>
            <span className="sub-3">Right Way</span>{" "}
          </h1>

          <p>
            The urgency of our problems needs fresh, bold and the right
            solutions!
          </p>
          <br />

          <p>
            I am running to be a Member of Parliament to champion bold ideas and
            the right way of doing things. So together we can provide fair and
            nonpartisan opportunities to all people of Tema Central
            Constituency, not just a few.
          </p>
          <br />

          <p>
            I call my 2020 Election Campaign for the Tema Central Constituency
            seat <span className="sub-3">THE</span>{" "}
            <span className="sub-1">RIGHT</span>{" "}
            <span className="sub-2">CAMPAIGN</span>. This is because, for me
            having lived in Tema Central for 27 years, serving my constituents
            is not just about who can make a difference, but who can make the
            right difference.
          </p>
          <br />

          <p>
            I grew up believing that Tema is the best place to live in Ghana. I
            am ready to work with the people of Tema Central to make our
            constituency the envy of all other constituencies.
          </p>
        </div>
      </div>
    </Wrapper>
  )
}
