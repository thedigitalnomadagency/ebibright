import tw, { styled } from "twin.macro"

export default styled.div`
  ${tw``}
  height:40vh;

  @media screen and (min-width: 768px) {
    height: 80vh;
  }

  .inner-wrapper {
    ${tw`container mx-auto  lg:flex h-full`}
  }

  .image-box {
    width: 50px;
    height: 50px;
    overflow: hidden;

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
    ${tw`flex flex-col justify-center px-8 `}

    @media screen and (min-width: 769px) {
      width: 70%;
    }
  }

  .heading {
    ${tw`lg:text-4xl lg:mb-3`}
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
