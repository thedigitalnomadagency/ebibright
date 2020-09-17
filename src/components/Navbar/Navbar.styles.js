import tw, { styled } from "twin.macro"

export const Wrapper = styled.nav`
  ${tw`shadow flex items-center`}
  height: 10vh;

  .container {
    ${tw`container mx-auto`}
  }

  .main-menu {
    ${tw`hidden lg:flex justify-between items-center `}
  }

  .links-wrapper {
    ${tw`flex justify-between`}
  }

  .menu-item {
    ${tw` mx-5 py-2 font-bold`}
    color: #096537;
  }

  .mobile-menu {
    ${tw`flex lg:hidden`}
  }

  .donate-btn {
    ${tw`text-white font-bold py-2 px-4 rounded`}
    background-color: #e4161d;
  }
`
