import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
// import Img from "../images/Slide1.PNG"

//styling
import styles from "../styles/images.module.css"

const getImages = graphql`
  {
    fluid: file(relativePath: { eq: "Slide1.PNG" }) {
      childImageSharp {
        fluid(maxWidth: 1080, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    fluid2: file(relativePath: { eq: "Slide4.png" }) {
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
    fluid2,
  } = useStaticQuery(getImages)

  return (
    <section className={styles.container}>
      <article className={styles.singleImage}>
        <Image fluid={fluid.fluid} />
      </article>
      <article className={styles.singleImage}>
        <Image fluid={fluid2.childImageSharp.fluid} />
      </article>
    </section>
  )
}
