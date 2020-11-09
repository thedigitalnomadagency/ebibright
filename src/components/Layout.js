import React from "react"

//components
import Navbar from "./Navbar"
import Footer from "./Footer"

//mui
import Container from "@material-ui/core/Container"
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"

import "../styles/global.css"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#e4161d",
    },
    secondary: {
      main: "#096537",
    },
  },
  typography: {
    fontFamily: ["Metropolis", "sans-serif"].join(","),
  },
})

export default ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />

      <Container maxWidth="lg" disableGutters={true}>
        {children}
      </Container>

      <Footer />
    </ThemeProvider>
  )
}
