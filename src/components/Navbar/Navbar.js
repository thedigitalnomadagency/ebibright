import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { FaBars } from "react-icons/fa"
import { makeStyles } from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"

//styling
import { Wrapper } from "./Navbar.styles"

const useStyles = makeStyles({
  list: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    fontSize: 25,
    textTransform: "uppercase",
  },
  links: {
    width: 200,
  },
  link: {
    paddingTop: 10,
    paddingBottom: 10,
    borderColor: " #e4161d",
    borderBottomWidth: 1,
    borderStyle: "solid",
    fontSize: 20,
    letterSpacing: 2,
  },
})

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

  const classes = useStyles()

  const [showDrawer, setShowDrawer] = React.useState(false)

  const toggleDrawer = open => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return
    }

    setShowDrawer(open)
  }

  const links = [
    {
      text: "Home",
      link: "/",
    },
    {
      text: "Meet Ebi",
      link: "/meet-ebi",
    },
    {
      text: "My Plans",
      link: "/my-plans",
    },
    {
      text: "Take Action",
      link: "/take-action",
    },
    {
      text: "Store",
      link: "/store",
    },
    {
      text: "Connect",
      link: "/connect",
    },
  ]

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
        <button className="menu-icon" onClick={toggleDrawer(true)}>
          <FaBars />
        </button>
        <Drawer anchor={"left"} open={showDrawer} onClose={toggleDrawer(false)}>
          <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <ul className={classes.links}>
              {links.map(({ text, link }, index) => (
                <li key={index} className={classes.link}>
                  <Link to={link}>{text}</Link>
                </li>
              ))}
            </ul>
          </div>
        </Drawer>
        <div className="logo-box">
          <Img fluid={fluid.fluid} className="image" />
        </div>

        <button className="donate-btn">Donate</button>
      </div>
    </Wrapper>
  )
}
