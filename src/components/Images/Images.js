import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

//styling
import { ImgWrapper } from "./Images.styles"

const getImages = graphql`
  {
    fluid: file(relativePath: { eq: "img1.png" }) {
      childImageSharp {
        fluid(maxWidth: 1080, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }

    file(relativePath: { eq: "img2.png" }) {
      childImageSharp {
        fluid(maxWidth: 1080, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
  }
`

export default () => {
  const {
    fluid: { childImageSharp: fluid },
    file,
  } = useStaticQuery(getImages)

  return (
    <ImgWrapper>
      <article>
        <Image fluid={fluid.fluid} />
      </article>
      <article>
        <Image fluid={file.childImageSharp.fluid} />
      </article>
    </ImgWrapper>
  )
}
