import React from "react"

//styling
import "../styles/global.css"

const Layout = ({ children }) => {
  return (
    <>
      <main className="content">{children}</main>
    </>
  )
}

export default Layout
