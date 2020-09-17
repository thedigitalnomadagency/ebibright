import React from "react"
import { Link } from "gatsby"
//styling
import { Wrapper } from "./Navbar.styles"

export default () => {
  return (
    <Wrapper>
      <div className="container main-menu">
        <div className="logo-box">Ebi Bright Logo</div>
        <ul className="links-wrapper">
          <li className="menu-item">
            {" "}
            <Link to="/">Meet Ebi</Link>{" "}
          </li>
          <li className="menu-item">
            <Link to="/">Take Action</Link>{" "}
          </li>
          <li className="menu-item">
            <Link to="/">Store</Link>{" "}
          </li>
          <li className="menu-item">
            <Link to="/">Connect</Link>{" "}
          </li>
        </ul>

        <button className="donate-btn">Donate</button>
      </div>

      <div className="container mobile-menu">
        <h1>mobile menu</h1>
      </div>
    </Wrapper>
  )
}
