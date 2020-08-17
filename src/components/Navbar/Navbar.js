import React from "react"

//styling
import Container from "./Navbar.styles"

export default () => {
  return (
    <Container>
      <nav className="navbar">
        <div className="logo-wrapper">
          <span className="logo">Ebi Bright</span>
        </div>
        <div className="nav-menu-wrapper">
          <div className="nav-menu">
            <a href="/" className="nav-item">
              Home
            </a>
            <a href="/" className="nav-item">
              About
            </a>
            <a href="/" className="nav-item">
              Contact
            </a>
          </div>

          <div>
            <a href="/" className="button">
              Donate
            </a>
          </div>
        </div>
      </nav>
    </Container>
  )
}
