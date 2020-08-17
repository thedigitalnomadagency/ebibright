import tw from "twin.macro"
import styled from "styled-components"

export default styled.div`
  .navbar {
    ${tw`flex flex-wrap items-center justify-between p-6 bg-gray-800`}
  }

  .logo-wrapper {
    ${tw`flex items-center flex-shrink-0 mr-6 text-white`}
  }

  .logo {
    ${tw`text-xl font-bold`}
  }

  .nav-menu-wrapper {
    ${tw`flex-grow block w-full sm:flex sm:items-center sm:w-auto`}
  }

  .nav-menu {
    ${tw`text-sm sm:flex-grow`}
  }

  .nav-item {
    ${tw`block mt-4 mr-4 text-teal-200 sm:inline-block sm:mt-0 hover:text-white`}
  }

  .button {
    ${tw`inline-block px-4 py-2 mt-4 text-sm leading-none text-white border border-white rounded hover:border-transparent hover:text-blue-500 hover:bg-white md:mt-0`}
  }
`
