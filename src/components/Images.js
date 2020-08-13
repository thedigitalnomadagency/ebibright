import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

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

    file(relativePath: { eq: "Slide2.png" }) {
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

  console.log(file)

  return (
    <section className={styles.container}>
      <article className={styles.singleImage}>
        <Image fluid={fluid.fluid} />
      </article>
      <article className={styles.singleImage}>
        <Image fluid={file.childImageSharp.fluid} />
      </article>
      <h3>Official Launch: September 1st, 2020</h3>
    </section>
  )
}
