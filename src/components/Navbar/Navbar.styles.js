import tw from "twin.macro"
import styled from "styled-components"
import { motion } from "framer-motion"

import Container from "../Layout/Container"

// ${tw``}

export const Navbar = styled(motion.nav)`
  ${tw`shadow`}
`
export const InnerContainer = styled(Container)`
  .wrapper {
    ${tw`flex justify-between p-3 items-center`}
  }

  .main-menu {
    ${tw`
    hidden
    lg:block
    `}
  }

  .main-options {
    ${tw`flex justify-between`}
  }

  .main-item {
    ${tw`px-3`}
  }

  .icon-wrapper {
    ${tw`
    border
    p-1
    rounded
    lg:hidden
    `}
  }

  .icon {
    ${tw`
    h-6
    w-6
    text-gray-500
    `}
  }

  .mobile-menu {
    ${({ show }) => (show ? tw`block` : tw`hidden`)}
  }

  .mobile-item {
    ${tw`
      pl-2
      py-2
    `}
  }
`
