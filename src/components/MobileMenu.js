import React from "react"
import { Link } from "gatsby"
import { styled } from "twin.macro"
import Img from "gatsby-image"

//mui
import Container from "@material-ui/core/Container"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Hidden from "@material-ui/core/Hidden"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"
import Drawer from "@material-ui/core/Drawer"

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

export default ({ logo }) => {
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
      link: "/",
    },
    {
      text: "Take Action",
      link: "/",
    },
    {
      text: "Donate",
      link: "/",
    },
  ]

  return (
    <Hidden mdUp>
      <div>
        <AppBar position="static" color="transparent">
          <Toolbar>
            <Container maxWidth="lg" disableGutters={true}>
              <Grid
                container
                spacing={1}
                alignItems="center"
                justify="space-between"
              >
                <Grid item xs={2}>
                  <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={toggleDrawer(true)}
                    style={{ outline: "none" }}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Drawer
                    anchor={"left"}
                    open={showDrawer}
                    onClose={toggleDrawer(false)}
                  >
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
                </Grid>

                <Grid container item xs={3}>
                  <Logo fluid={logo} />
                </Grid>
              </Grid>
            </Container>
          </Toolbar>
        </AppBar>
      </div>
    </Hidden>
  )
}

const Logo = styled(Img)`
  width: 150px;
`
