import tw, { styled } from "twin.macro"

export const Wrapper = styled.nav`
  ${tw`shadow flex items-center`}
  height: 10vh;

  .container {
    ${tw`container mx-auto`}
  }

  .logo-box {
    ${tw`w-32`}
  }

  .main-menu {
    ${tw`hidden lg:flex justify-between items-center mx-4`}
  }

  .links-wrapper {
    ${tw`flex justify-between`}
  }

  .menu-item {
    ${tw` mx-5 py-2 uppercase text-white  py-2 px-4 rounded text-sm`}
    background-color: #e4161d;
  }

  .mobile-menu {
    ${tw`flex lg:hidden justify-between items-center mx-5`}
  }

  .donate-btn {
    ${tw`text-white  py-1 px-2 lg:py-2 lg:px-4 rounded uppercase text-sm md:text-base lg:text-sm `}
    background-color: #e4161d;
  }

  .menu-icon {
    ${tw`pr-3 flex justify-center text-xl md:text-3xl`}
  }
`
