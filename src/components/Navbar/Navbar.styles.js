import tw, { styled } from "twin.macro"

export const Wrapper = styled.nav`
  ${tw`shadow lg:py-5 lg:px-5`}

  .container {
    ${tw`container mx-auto`}
  }

  .logo-box {
    ${tw`w-32 lg:w-48`}
  }

  .main-menu {
    ${tw`hidden lg:flex justify-between items-center`}
  }

  .links-wrapper {
    ${tw`flex justify-between`}
  }

  .menu-item {
    ${tw` mx-5 py-2 uppercase text-black hover:text-white  py-2 px-4 text-lg tracking-wide`}

    &:hover {
      background-color: #e4161d;
    }
  }

  .mobile-menu {
    ${tw`flex lg:hidden justify-between items-center px-5 py-4`}
  }

  .donate-btn {
    ${tw`text-white  py-1 px-2 lg:py-2 lg:px-4 rounded uppercase text-sm md:text-base lg:text-sm lg:font-bold`}
    background-color: #e4161d;
  }

  .menu-icon {
    ${tw`pr-3 flex justify-center text-2xl md:text-3xl outline-none`}
  }
`
