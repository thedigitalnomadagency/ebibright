import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { FaBars } from "react-icons/fa"

//styling
import { Wrapper } from "./Navbar.styles"

export default () => {
  const {
    fluid: { childImageSharp: fluid },
  } = useStaticQuery(graphql`
    {
      fluid: file(relativePath: { eq: "main-logo.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

  return (
    <Wrapper>
      <div className="container main-menu">
        <div className="logo-box">
          <Img fluid={fluid.fluid} className="image" />
        </div>
        <ul className="links-wrapper">
          <li className="menu-item">
            {" "}
            <Link to="/">Meet Ebi</Link>{" "}
          </li>
          <li className="menu-item">
            <Link to="/">My Plans</Link>{" "}
          </li>
          <li className="menu-item">
            <Link to="/">Take Action</Link>{" "}
          </li>
          <li className="menu-item">
            <Link to="/">Store</Link>{" "}
          </li>
          <li className="menu-item">
            <Link to="/">Connect</Link>{" "}
          </li>
        </ul>

        <button className="donate-btn">Donate</button>
      </div>

      <div className="container mobile-menu">
        <div className="menu-icon">
          <FaBars />
        </div>
        <div className="logo-box">
          <Img fluid={fluid.fluid} className="image" />
        </div>

        <button className="donate-btn">Donate</button>
      </div>
    </Wrapper>
  )
}
