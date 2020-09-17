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
      {/* <div className="image-box">
        <Img fluid={fluid.fluid} className="image" />
      </div> */}
    </Wrapper>
  )
}
