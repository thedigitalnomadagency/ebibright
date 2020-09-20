import tw, { styled } from "twin.macro"

export default styled.div`
  ${tw`flex justify-center items-center py-10 px-8 lg:px-0`}

  .inner-wrapper {
    ${tw`container mx-auto grid lg:grid-cols-2 py-5 lg:px-12 gap-3`}
  }

  .text {
    ${tw`lg:pt-10 `}
  }

  .heading {
    ${tw`text-xl font-bold text-center lg:text-left lg:text-xl xl:text-3xl  tracking-wide lg:pr-10`}
  }

  .sub {
    ${tw`text-lg text-center lg:text-left lg:text-lg xl:text-2xl tracking-wide lg:pr-10`}
  }

  .input-wrapper {
    ${tw`mt-5`}
  }

  .label {
    ${tw`block text-gray-700 font-bold md:text-left mb-1 md:mb-0 pr-4`}
  }

  .input {
    ${tw`bg-gray-200 appearance-none border-2 border-gray-200 w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-red-700`}
  }

  .icon-box {
    ${tw`pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700`}
  }

  .select {
    ${tw`relative`}
  }

  .icon {
    ${tw`fill-current h-4 w-4`}
  }

  .btn {
    ${tw`bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-5  mt-5 uppercase`}
  }
`
