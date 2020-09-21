import React from "react"
import tw, { styled } from "twin.macro"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import background from "../images/ndc-logo.png"

//components
import Layout from "../components/Layout/Layout"

const getImage = graphql`
  {
    fluid: file(relativePath: { eq: "hero.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default () => {
  const {
    fluid: { childImageSharp: fluid },
  } = useStaticQuery(getImage)

  const prices = ["GHS2", "GHS5", "GHS10", "GHS20", "GHS50", "GHS100", "Other"]

  let date1 = new Date()
  let date2 = new Date("12/07/2020")

  let diff = date2.getTime() - date1.getTime()
  let diffInDays = diff / (1000 * 3600 * 24)

  return (
    <Wrapper>
      <Layout>
        <div className="bg-image"></div>

        <div className="hero">
          <div className="image-box">
            <Img fluid={fluid.fluid} className="image" fadeIn={false} />
          </div>
          <div className="message">
            <h1 className="heading">
              <span className="sub-1">Together </span>
              <span className="sub-2">the </span>
              <span className="sub-3">Right Way</span>{" "}
            </h1>

            <p>
              The urgency of our problems needs fresh, bold and the right
              solutions!
            </p>
            <br />

            <p>
              I am running to be a Member of Parliament to champion bold ideas
              and the right way of doing things. So together we can provide fair
              and nonpartisan opportunities to all people of Tema Central
              Constituency, not just a few.
            </p>
            <br />

            <p>
              I call my 2020 Election Campaign for the Tema Central Constituency
              seat <span className="sub-3">THE</span>{" "}
              <span className="sub-1">RIGHT</span>{" "}
              <span className="sub-2">CAMPAIGN</span>. This is because, for me
              having lived in Tema Central for 27 years, serving my constituents
              is not just about who can make a difference, but who can make the
              right difference.
            </p>
            <br />

            <p>
              I grew up believing that Tema is the best place to live in Ghana.
              I am ready to work with the people of Tema Central to make our
              constituency the envy of all other constituencies.
            </p>
          </div>
        </div>

        <div className="donation-section">
          <div className="inner-wrapper">
            <div className="text-box">
              <p>{Math.floor(diffInDays)} DAYS LEFT</p>
              <br />
              <p>
                EVERY LITTLE COUNTS. SUPPORT THE RIGHT CAMPAIGN and get a
                merchandise
              </p>
            </div>
            <div className="buttons-box">
              <div className="inner-box">
                {prices.map((price, idx) => (
                  <button key={idx} className="btn">
                    {price}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="newsletter-section">
          <div className="inner-wrapper">
            <div className="text">
              <p className="heading">THIS IS IMPORTANT WORK. BE PART! </p>
              <br />
              <p className="sub">
                Connect with us for the latest updates or volunteer for the
                Right Campaign so together we can make history in Tema Central.
              </p>
            </div>

            <form className="form">
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

              <button className="submit-btn">Submit</button>
            </form>
          </div>
        </div>
      </Layout>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .bg-image {
    height: 48vh;
    background-image: url(${background});
    background-size: cover;
    opacity: 0.2;
    overflow: hidden;

    @media screen and (min-width: 768px) {
      height: 100vh;
    }
  }

  .hero {
    ${tw`container grid lg:grid-cols-2 bg-white shadow-md lg:shadow-none`}
    width: 90%;
    height: auto;
    margin: -300px auto 0 auto;

    @media screen and (min-width: 768px) {
      width: 95%;
      margin-top: -550px;
    }
  }

  .image-box {
    ${tw`pt-5 lg:pt-0`}
  }

  .image {
    width: 70%;
    margin: 0 auto;
    @media screen and (min-width: 768px) {
      width: 90%;
    }
  }

  .message {
    ${tw`py-5 px-3`}
  }

  .message p {
    ${tw`text-xl`}
  }

  .heading {
    ${tw`text-center lg:text-left tracking-wide mb-3 font-extrabold`}
    font-size: 1.46rem;

    @media screen and (min-width: 768px) {
      font-size: 2.7rem;
    }
  }

  .sub-1 {
    color: var(--ndc-red);
  }

  .sub-2 {
    color: var(--ndc-black);
  }

  .sub-3 {
    color: var(--ndc-green);
  }

  .donation-section {
    background-color: var(--ndc-black);
    height: auto;
    color: #fff;
  }

  .inner-wrapper {
    ${tw`container mx-auto md:px-10 md:grid md:grid-cols-2`}
  }

  .text-box {
    ${tw` h-64 flex flex-col justify-center md:pr-10 text-2xl md:tracking-wider px-8 text-center md:text-left`}
  }

  .buttons-box {
    ${tw`flex justify-center items-center p-5`}
  }

  .inner-box {
    ${tw`p-5 grid grid-cols-2 grid-rows-4 lg:grid-cols-4 lg:grid-rows-2 gap-4`}
  }

  .btn {
    ${tw`bg-white hover:bg-red-700 hover:text-white font-bold py-2 px-4 rounded-full`}
    color: var(--ndc-green);
  }

  .newsletter-section {
    ${tw`flex justify-center items-center py-10 px-8 lg:px-0`}

    .inner-wrapper {
      ${tw`container mx-auto grid lg:grid-cols-2 py-5 lg:px-12 gap-3`}
    }
  }

  .text {
    ${tw`lg:pt-10 `}

    .heading {
      ${tw`text-xl font-bold text-center lg:text-left lg:text-xl xl:text-3xl  tracking-wide lg:pr-10`}
    }
  }

  .sub {
    ${tw`text-lg text-center lg:text-left lg:text-lg xl:text-2xl tracking-wide lg:pr-10`}
  }

  .form {
    .input-wrapper {
      ${tw`mt-5`}
    }
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

  .submit-btn {
    ${tw`bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-5  mt-5 uppercase`}
  }
`
