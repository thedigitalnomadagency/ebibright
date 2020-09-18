import React from "react"

//styling
import Wrapper from "./Donations.styles"

const prices = ["GHS2", "GHS5", "GHS10", "GHS20", "GHS50", "GHS100", "Other"]

export default () => {
  let date1 = new Date()
  let date2 = new Date("12/07/2020")

  let diff = date2.getTime() - date1.getTime()
  let diffInDays = diff / (1000 * 3600 * 24)

  return (
    <Wrapper>
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
    </Wrapper>
  )
}
