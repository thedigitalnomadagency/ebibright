import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { styled } from "twin.macro"
import { Link } from "gatsby"
import { addData } from "../firebase/firebase-utils"

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
import Phone from "@material-ui/icons/WhatsApp"
import Snackbar from "@material-ui/core/Snackbar"
import Close from "@material-ui/icons/Close"
import Email from "@material-ui/icons/Email"

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

  const [formData, setData] = React.useState({
    name: "",
    phone: "",
  })

  const [open, setOpen] = React.useState(false)

  const [message, setMessage] = React.useState("")

  const handleClose = (_, reason) => {
    if (reason === "clickaway") {
      return
    }

    setOpen(false)
  }

  const handleChange = e => {
    const { name, value } = e.target

    setData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()

    try {
      if (formData.name === "" && formData.phone === "") {
        setMessage("Fields cannot be empty. Try Again")
        setOpen(true)
        return
      }

      await addData(formData)

      setMessage(`Thank you for connecting with us`)
      setOpen(true)

      setData({
        name: "",
        phone: "",
      })
    } catch (err) {
      setMessage(err.message)
    }
  }

  return (
    <Wrapper>
      <Container maxWidth="lg" disableGutters={true}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={12} lg={4}>
            <form noValidate autoComplete="off">
              <h2 className="form-title">Stay in touch</h2>
              <Input
                name="name"
                label="Name"
                variant="outlined"
                type="text"
                fullWidth
                value={formData.name}
                onChange={handleChange}
              />

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Input
                  name="phone"
                  label="Phone"
                  variant="outlined"
                  type="number"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  onClick={handleSubmit}
                >
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
              <h3 className="phone"> : 0233818181</h3>
              <div style={{ display: "flex" }}>
                <Email />
                <h3 className="phone"> : campaign@ebibright.com</h3>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={12} lg={4}>
            <h1>
              <Link to="/">Home</Link>
            </h1>
            <h1>
              <Link to="/meet-ebi">Meet Ebi</Link>
            </h1>
            <h1>
              <Link to="/my-plans">My Plans</Link>
            </h1>
            <h1>
              <Link to="/take-action">Take Action</Link>
            </h1>
            <h1>
              <Link to="/donate">Donate</Link>
            </h1>
            <h1>
              <Link to="#">Privacy Policy</Link>
            </h1>
          </Grid>
          <Grid item xs={12} md={12} lg={4}>
            <Img fluid={data.logo.childImageSharp.fluid} />
            <p style={{ marginTop: 20, fontSize: 18 }}>
              © Copyright 2020. All rights reserved.
            </p>
          </Grid>
        </Grid>
      </Container>

      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={message}
        action={
          <React.Fragment>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
            >
              <Close fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
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
    flex-wrap: wrap;
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
