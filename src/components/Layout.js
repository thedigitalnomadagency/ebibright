import React from "react"

//components
import Navbar from "./Navbar/Navbar"

//styling
import "../styles/global.css"

export default ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  )
}
