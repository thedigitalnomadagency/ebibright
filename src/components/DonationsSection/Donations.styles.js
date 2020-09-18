import tw, { styled } from "twin.macro"

export default styled.div`
  ${tw`bg-black text-white`}

  .inner-wrapper {
    ${tw`container mx-auto md:px-10 md:grid md:grid-cols-2`}
  }

  .text-box {
    ${tw` h-64 flex justify-center items-center md:pr-10 text-lg md:tracking-wider px-4 text-center md:text-left`}
    color: #e4161d;
  }

  .buttons-box {
    ${tw`flex justify-center items-center p-5`}
  }

  .inner-box {
    ${tw`p-5 grid grid-cols-2 grid-rows-4 lg:grid-cols-4 lg:grid-rows-2 gap-4`}
  }

  .btn {
    ${tw`bg-white rounded-full px-10 py-3`}
    color: #096537;
  }
`
