import React from "react"
import { styled } from "twin.macro"

//mui
import Grid from "@material-ui/core/Grid"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import Snackbar from "@material-ui/core/Snackbar"
import Close from "@material-ui/icons/Close"
import IconButton from "@material-ui/core/IconButton"

//components
import Layout from "../components/Layout"

export default () => {
  const [price, setPrice] = React.useState("")

  const [open, setOpen] = React.useState(false)

  const [message, setMessage] = React.useState("")

  const handleClose = (_, reason) => {
    if (reason === "clickaway") {
      return
    }

    setOpen(false)
  }

  const onValueChange = e => {
    setPrice(e.target.value)
  }

  const focus = () => {
    setPrice("")
  }

  const donate = async e => {
    e.preventDefault()
    if (price === "") {
      setMessage("Please choose an amount before continuing")
      setOpen(true)
      return
    }
    //TODO work with api
    setMessage("Thank you for your donation")
    setOpen(true)
    setPrice("")
  }

  return (
    <Layout>
      <Wrapper>
        <Grid container>
          <Grid item xs={12} md={6}>
            <div className="grid-item">
              <h1 style={{ fontWeight: 600, fontSize: 40 }}>
                EVERY LITTLE COUNTS. SUPPORT THE RIGHT CAMPAIGN
              </h1>
            </div>
          </Grid>

          <Grid item xs={12} md={6}>
            <div className="grid-item">
              <h1 style={{ fontWeight: 600, fontSize: 20 }}>
                Choose an amount:{" "}
              </h1>
              <p>Your contribution will help with The Right Campaign</p>
              <form className="form">
                <div className="radio">
                  <label
                    className="label"
                    style={{
                      backgroundColor: price === "2" && "#e4161d",
                    }}
                  >
                    <input
                      type="radio"
                      value="2"
                      name="price"
                      checked={price === "2"}
                      onChange={onValueChange}
                    />
                    GHS2
                  </label>
                </div>

                <div className="radio">
                  <label
                    className="label"
                    style={{
                      backgroundColor: price === "5" && "#e4161d",
                    }}
                  >
                    <input
                      type="radio"
                      value="5"
                      checked={price === "5"}
                      onChange={onValueChange}
                    />
                    GHS5
                  </label>
                </div>

                <div className="radio">
                  <label
                    className="label"
                    style={{
                      backgroundColor: price === "10" && "#e4161d",
                    }}
                  >
                    <input
                      type="radio"
                      value="10"
                      checked={price === "10"}
                      onChange={onValueChange}
                    />
                    GHS10
                  </label>
                </div>

                <div className="radio">
                  <label
                    className="label"
                    style={{
                      backgroundColor: price === "20" && "#e4161d",
                    }}
                  >
                    <input
                      type="radio"
                      value="20"
                      checked={price === "20"}
                      onChange={onValueChange}
                    />
                    GHS20
                  </label>
                </div>

                <div className="radio">
                  <label
                    className="label"
                    style={{
                      backgroundColor: price === "50" && "#e4161d",
                    }}
                  >
                    <input
                      type="radio"
                      value="50"
                      checked={price === "50"}
                      onChange={onValueChange}
                    />
                    GHS50
                  </label>
                </div>

                <div className="radio">
                  <label
                    className="label"
                    style={{
                      backgroundColor: price === "100" && "#e4161d",
                    }}
                  >
                    <input
                      type="radio"
                      value="100"
                      checked={price === "100"}
                      onChange={onValueChange}
                    />
                    GHS100
                  </label>
                </div>

                <TextField
                  label="GHS"
                  variant="outlined"
                  type="number"
                  onChange={onValueChange}
                  onFocus={focus}
                />
              </form>

              <Button
                variant="contained"
                color="primary"
                onClick={donate}
                style={{ outline: "none" }}
              >
                Donate
              </Button>
            </div>

            <Snackbar
              anchorOrigin={{
                vertical: "top",
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
          </Grid>
        </Grid>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.div`
  .grid-item {
    padding: 10px 10px;
    @media screen and (min-width: 768px) {
      margin: 80px auto;
    }
  }

  .form {
    display: flex;
    flex-wrap: wrap;
    margin: 1rem 0px 0.5rem;
    list-style: none;
    justify-content: flex-start;
  }

  .radio {
    margin: 0px 0.5rem 1rem 0px;
    width: calc((50% - 0.5rem) - 1px);

    @media screen and (min-width: 768px) {
      margin: 0px 1rem 1rem 0px;
      width: calc((25% - 0.75rem) - 1px);
    }

    input[type="radio"] {
      width: 0px;
      height: 0px;
      overflow: hidden;
      visibility: hidden;
    }
  }

  .label {
    align-items: center;
    display: flex;
    justify-content: center;
    text-align: center;
    white-space: nowrap;
    width: 100%;
    padding: 1rem;
    position: relative;
    line-height: 1;
    background-color: var(--ndc-green);
    font-weight: bold;
    font-size: 1.25rem;
    font-style: normal;
    text-transform: none;
    letter-spacing: 0px;
    color: #fff;
    border-radius: 400px;
    height: 3rem;
    cursor: pointer;
  }

  label,
  label:focus,
  label:active {
    letter-spacing: 0.7px;
    line-height: 1;
    font-size: 20px;
  }
`
