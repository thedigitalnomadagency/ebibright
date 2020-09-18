import tw, { styled } from "twin.macro"

export default styled.div`
  ${tw`overflow-hidden`}
  height:auto;

  @media screen and (min-width: 769px) {
    height: 35vh;
  }

  @media screen and (min-width: 1025px) {
    height: 80vh;
  }

  .inner-wrapper {
    ${tw`container mx-auto  lg:flex h-full`}
  }

  .image-box {
    width: 60%;
    overflow: hidden;
    margin: 0 auto;
    padding-top: 30px;

    @media screen and (min-width: 769px) {
      width: 30%;
      height: 100%;
      padding-top: 50px;
      padding-left: 15px;
    }
  }

  .image {
    width: 100%;
  }

  .message {
    ${tw`flex flex-col justify-center px-8 py-8 `}

    @media screen and (min-width: 769px) {
      width: 70%;
    }
  }

  .heading {
    ${tw`text-2xl text-center lg:text-left my-2 lg:text-4xl lg:mb-3`}
  }

  .sub-1 {
    color: #e4161d;
  }

  .sub-2 {
    color: #000;
  }

  .sub-3 {
    color: #096537;
  }
`
