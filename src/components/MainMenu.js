import React from "react"
import { Link } from "gatsby"
import { styled } from "twin.macro"
import Img from "gatsby-image"

//mui
import Container from "@material-ui/core/Container"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Hidden from "@material-ui/core/Hidden"

import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"

export default ({ logo, flag }) => {
  const links = [
    {
      text: "Meet Ebi",
      link: "/",
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
    <Hidden smDown>
      <div>
        <AppBar position="static" color="transparent">
          <Toolbar>
            <Container maxWidth="lg" disableGutters={true}>
              <Grid container spacing={2} alignItems="center" justify="center">
                <Grid item xs={2}>
                  <LogoWrapper disableRipple={true} component={Link} to="/">
                    <Logo fluid={logo} />
                  </LogoWrapper>
                </Grid>
                <Grid
                  container
                  item
                  xs={9}
                  justify="center"
                  alignItems="center"
                >
                  {links.map(link => {
                    return (
                      <Grid item xs={2}>
                        <StyledButton
                          size="large"
                          component={Link}
                          to={link.link}
                        >
                          {link.text}
                        </StyledButton>
                      </Grid>
                    )
                  })}
                </Grid>
                <Grid item xs={1}>
                  <Flag fluid={flag} className="image" />
                </Grid>
              </Grid>
            </Container>
          </Toolbar>
        </AppBar>
      </div>
    </Hidden>
  )
}

const StyledButton = styled(Button)`
  font-weight: 700;
  outline: none;
  font-size: 13px;
  &:hover {
    background-color: var(--ndc-red);
    color: var(--ndc-black);
  }

  @media screen and (min-width: 1051px) {
    font-size: 15px;
  }
`

const Flag = styled(Img)`
  width: 60px;
`
const LogoWrapper = styled(Button)`
  outline: none;
  &:hover {
    background-color: transparent;
  }
`

const Logo = styled(Img)`
  width: 150px;
`
