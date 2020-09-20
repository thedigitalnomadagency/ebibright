import tw, { styled } from "twin.macro"

export default styled.div`
  ${tw`overflow-hidden`}
  height:auto;

  @media screen and (min-width: 769px) {
    height: auto;
  }

  @media screen and (min-width: 1025px) {
    height: 80vh;
  }

  .inner-wrapper {
    ${tw`container mx-auto  lg:flex h-full`}
  }

  .image-box {
    width: 70%;
    overflow: hidden;
    margin: 0 auto;
    padding-top: 30px;

    @media screen and (min-width: 769px) {
      width: 55%;
      height: 100%;
      padding-top: 50px;
      padding-left: 15px;
    }
  }

  .image {
    width: 100%;
  }

  .message {
    ${tw`flex flex-col justify-center xl:pr-32 py-10 lg:py-16 px-8`}

    @media screen and (min-width: 769px) {
      width: 70%;
    }
  }

  .message p {
    ${tw`text-lg`}
  }

  .heading {
    ${tw`text-center lg:text-left my-2 mb-2 lg:mb-3`}
    font-size:1.7rem;

    @media screen and (min-width: 1024px) {
      font-size: 2.5rem;
    }
  }

  .sub-1 {
    ${tw`font-extrabold`}
    color: #e4161d;
  }

  .sub-2 {
    ${tw`font-extrabold`}
    color: #000;
  }

  .sub-3 {
    ${tw`font-extrabold`}
    color: #096537;
  }
`
