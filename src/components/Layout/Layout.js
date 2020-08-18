import React from "react"

//components
import Container from "./Container"
import Navbar from "../Navbar/Navbar"

//styling
import "../../styles/global.css"

export default ({ children }) => {
  return (
    <>
      <Navbar />
      <Container>
        <main>{children}</main>
      </Container>
    </>
  )
}
