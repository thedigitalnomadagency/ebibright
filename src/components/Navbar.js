import React from "react"
import { useStaticQuery, graphql } from "gatsby"

//components
import Main from "./MainMenu"
import Mobile from "./MobileMenu"

export default () => {
  const data = useStaticQuery(graphql`
    {
      logo: file(relativePath: { eq: "main-logo.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }

      flag: file(relativePath: { eq: "ndc-logo.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

  return (
    <React.Fragment>
      <Mobile
        flag={data.flag.childImageSharp.fluid}
        logo={data.logo.childImageSharp.fluid}
      />

      <Main
        logo={data.logo.childImageSharp.fluid}
        flag={data.flag.childImageSharp.fluid}
      />
    </React.Fragment>
  )
}
