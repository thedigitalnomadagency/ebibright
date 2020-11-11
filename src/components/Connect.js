import React from "react"
import tw, { styled } from "twin.macro"

//mui
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import Twitter from "@material-ui/icons/Twitter"
import Facebook from "@material-ui/icons/Facebook"
import Instagram from "@material-ui/icons/Instagram"
import YouTube from "@material-ui/icons/YouTube"

export default () => {
  return (
    <Wrapper>
      <div className="inner-wrapper">
        <div className="text">
          <p className="heading">THIS IS IMPORTANT WORK. BE PART! </p>
          <br />
          <p className="sub">
            Connect with us for the latest updates or volunteer for the Right
            Campaign so together we can make history in Tema Central.
          </p>

          <div className="socials">
            <IconButton
              edge="start"
              color="inherit"
              aria-label="twitter"
              style={{ outline: "none" }}
            >
              <Twitter style={{ fontSize: 40 }} />
            </IconButton>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="facebook"
              style={{ outline: "none" }}
            >
              <Facebook style={{ fontSize: 40 }} />
            </IconButton>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="instagram"
              style={{ outline: "none" }}
            >
              <Instagram style={{ fontSize: 40 }} />
            </IconButton>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="youtube"
              style={{ outline: "none" }}
            >
              <YouTube style={{ fontSize: 40 }} />
            </IconButton>
          </div>
        </div>

        <form>
          <div className="input-wrapper">
            <label className="label" htmlFor="firstName">
              First Name:
            </label>
            <input className="input" name="firstName" type="text" />
          </div>

          <div className="input-wrapper">
            <label className="label" htmlFor="number">
              Phone Number:
            </label>
            <input className="input" name="number" type="number" />
          </div>

          <div className="input-wrapper">
            <label className="label" htmlFor="location">
              Where you live:
            </label>

            <div className="select">
              <select className="input" id="grid-state">
                <option>Coummunity 1, Tema</option>
                <option>Coummunity 2, Tema</option>
                <option>Coummunity 3, Tema</option>
                <option>Coummunity 4, Tema</option>
                <option>Coummunity 5, Tema</option>
                <option>Coummunity 6, Tema</option>
                <option>Coummunity 7, Tema</option>
                <option>Coummunity 8, Tema</option>
                <option>Coummunity 9, Tema</option>
                <option>Coummunity 10, Tema</option>
                <option>Coummunity 11, Tema</option>
                <option>Coummunity 12, Tema</option>
                <option>Coummunity 20, Tema</option>
                <option>Coummunity 21, Tema</option>
                <option>Coummunity 22, Tema</option>
                <option>Coummunity 23, Tema</option>
                <option>Coummunity 25, Tema</option>
                <option>Outside Tema</option>
              </select>

              <div className="icon-box">
                <svg
                  className="icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="input-wrapper">
            <label className="label" htmlFor="address">
              Digital Address:
            </label>
            <input className="input" name="address" type="text" />
          </div>

          <div className="input-wrapper">
            <label className="label" htmlFor="email">
              Email:
            </label>
            <input className="input" id="email" type="email" />
          </div>

          <StyledButton variant="contained" color="primary" size="large">
            Connect
          </StyledButton>
        </form>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
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

  .socials {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;

    @media screen and (min-width: 768px) {
      justify-content: flex-start;
    }
  }

  .title {
    font-size: 26px;
    font-weight: 700;
    line-height: 1.1;
    margin-bottom: 15px;
    text-transform: uppercase;
  }
`

const StyledButton = styled(Button)`
  margin-top: 10px;
`
