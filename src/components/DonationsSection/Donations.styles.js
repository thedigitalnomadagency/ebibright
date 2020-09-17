import tw, { styled } from "twin.macro"

export default styled.div`
  ${tw`bg-black text-white`}

  .inner-wrapper {
    ${tw`container mx-auto lg:px-10 lg:grid lg:grid-cols-2`}
  }

  .text-box {
    ${tw` h-64 flex justify-center items-center lg:pr-10 text-lg lg:tracking-wider px-4 border border-white text-center lg:text-left`}
  }

  .buttons-box {
    ${tw`flex justify-center items-center`}
  }

  .inner-box {
    ${tw`p-5 grid grid-cols-2 grid-rows-5 lg:grid-cols-4 lg:grid-rows-2 gap-4`}
  }

  .btn {
    ${tw`bg-white rounded-full px-10 py-3`}
    color: #096537;
  }
`
