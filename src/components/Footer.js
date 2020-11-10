import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { styled } from "twin.macro"
import { Link } from "gatsby"

//mui
import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import Twitter from "@material-ui/icons/Twitter"
import Facebook from "@material-ui/icons/Facebook"
import Instagram from "@material-ui/icons/Instagram"
import YouTube from "@material-ui/icons/YouTube"
import Phone from "@material-ui/icons/Phone"

export default () => {
  const data = useStaticQuery(graphql`
    {
      logo: file(relativePath: { eq: "main.png" }) {
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
      <Container maxWidth="lg" disableGutters={true}>
        <Grid container spacing={5}>
          <Grid1 item xs={12} sm={4}>
            <form noValidate autoComplete="off">
              <h2 className="form-title">Stay in touch</h2>
              <Input id="name" label="Name" variant="outlined" fullWidth />

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Input id="phone" label="Phone" variant="outlined" />
                <Button variant="contained" color="secondary" size="large">
                  Submit
                </Button>
              </div>
            </form>

            <div className="socials">
              <IconButton
                edge="start"
                color="inherit"
                aria-label="twitter"
                style={{ outline: "none" }}
              >
                <Twitter />
              </IconButton>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="facebook"
                style={{ outline: "none" }}
              >
                <Facebook />
              </IconButton>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="instagram"
                style={{ outline: "none" }}
              >
                <Instagram />
              </IconButton>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="youtube"
                style={{ outline: "none" }}
              >
                <YouTube />
              </IconButton>
              <Phone />
              <h3 className="phone"> : 0541285644</h3>
            </div>
          </Grid1>
          <Grid2 item xs={12} sm={4}>
            <h1>
              <Link to="/">Home</Link>
            </h1>
            <h1>
              <Link to="/meet-ebi">Meet Ebi</Link>
            </h1>
            <h1>
              <Link to="/">My Plans</Link>
            </h1>
            <h1>
              <Link to="/">Take Action</Link>
            </h1>
            {/* <h1>
              <Link to="/">Donate</Link>
            </h1> */}
            <h1>
              <Link to="/">Privacy Policy</Link>
            </h1>
          </Grid2>
          <Grid3 item xs={12} sm={4}>
            <Img fluid={data.logo.childImageSharp.fluid} />
            <p style={{ marginTop: 20, fontSize: 18 }}>
              © Copyright 2020. All rights reserved.
            </p>
          </Grid3>
        </Grid>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  border-top: 3px solid var(--ndc-green);
  padding: 50px 30px;
  background-color: #ecf0f1;

  @media screen and (min-width: 768px) {
    padding: 50px 70px;
  }

  .form-title {
    font-size: 26px;
    font-weight: 700;
    line-height: 1.1;
    margin-bottom: 15px;
    text-transform: uppercase;
  }

  .socials {
    display: flex;
    align-items: center;
  }

  .phone {
    font-size: 18px;
    font-weight: 700;
  }

  h1 {
    font-size: 18px;
    font-weight: 700;
    line-height: 1.55;
    text-transform: capitalize;
    cursor: pointer;
    padding-bottom: 10px;

    &:hover {
      color: var(--ndc-red);
    }
  }
`

const Input = styled(TextField)`
  margin-bottom: 10px;
`
const Grid1 = styled(Grid)``
const Grid2 = styled(Grid)``
const Grid3 = styled(Grid)``
