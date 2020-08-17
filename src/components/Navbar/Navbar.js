import React from "react"

//styling
import { Logo, NavWrapper, NavMenu, NavItem, NavLink } from "./Navbar.styles"

export default () => {
  return (
    <NavWrapper>
      <Logo>Logo</Logo>
      <NavMenu>
        <NavItem>
          <NavLink href="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/">Contact</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/">Donate</NavLink>
        </NavItem>
      </NavMenu>
    </NavWrapper>
  )
}
