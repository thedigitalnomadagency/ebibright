import tw, { styled } from "twin.macro"

export const Wrapper = styled.nav`
  ${tw`shadow lg:py-3 lg:px-12 xl:px-24 flex items-center`}

  .container {
    ${tw`container mx-auto`}
  }

  .logo-box {
    ${tw`w-56`}
  }

  .main-menu {
    ${tw`hidden lg:flex justify-between items-center`}
  }

  .links-wrapper {
    ${tw`flex justify-between`}
  }

  .menu-item {
    ${tw` lg:mx-0 xl:mx-5 py-2 uppercase text-black hover:text-white  py-2 px-4 text-base font-bold tracking-wide`}

    &:hover {
      background-color: var(--ndc-red);
    }
  }

  .mobile-menu {
    ${tw`flex lg:hidden justify-between items-center px-5 py-4`}
  }

  .donate-btn {
    ${tw`text-white  py-1 px-2 lg:py-2 lg:px-4 rounded uppercase text-sm md:text-base lg:text-sm lg:font-bold`}
    background-color: var(--ndc-red);
  }

  .menu-icon {
    ${tw`pr-3 flex justify-center text-2xl md:text-3xl outline-none`}
  }
`
