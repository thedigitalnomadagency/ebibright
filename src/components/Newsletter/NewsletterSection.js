import React from "react"

//styling
import Wrapper from "./Newsletter.styles"

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

          <button className="btn">Submit</button>
        </form>
      </div>
    </Wrapper>
  )
}
