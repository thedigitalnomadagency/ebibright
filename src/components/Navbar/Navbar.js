import React, { useState } from "react"
import { Link } from "gatsby"

//styling
import { Navbar, InnerContainer } from "./Navbar.styles"

export default () => {
  const [show, setShow] = useState(false)

  return (
    <Navbar>
      <InnerContainer show={show}>
        <div className="wrapper">
          <div className="logo-box">
            <h1>Logo</h1>
          </div>

          <div className="icon-wrapper" onClick={() => setShow(!show)}>
            {show ? (
              <svg viewBox="0 0 20 20" fill="currentColor" className="icon">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            ) : (
              <svg viewBox="0 0 20 20" fill="currentColor" className="icon">
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            )}
          </div>

          {/* main menu */}
          <div className="main-menu">
            <ul className="main-options">
              <li className="main-item">
                <Link to="/home">Home</Link>
              </li>
              <li className="main-item">
                <Link to="/about">About</Link>
              </li>
              <li className="main-item">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* mobile menu */}
        <div className="mobile-menu">
          <ul className="mobile-options">
            <li className="mobile-item">
              <Link to="/home">Home</Link>
            </li>
            <li className="mobile-item">
              <Link to="/about">About</Link>
            </li>
            <li className="mobile-item">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </InnerContainer>
    </Navbar>
  )
}
