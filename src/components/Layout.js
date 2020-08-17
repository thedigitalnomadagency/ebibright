import React from "react"

//components
import Navbar from "./Navbar/Navbar"

//styling
import "../styles/global.css"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  )
}

export default Layout
