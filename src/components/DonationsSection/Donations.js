import React from "react"

//styling
import Wrapper from "./Donations.styles"

const prices = [
  "GHS2",
  "GHS5",
  "GHS10",
  "GHS20",
  "GHS30",
  "GHS50",
  "GHS100",
  "Other",
]

export default () => {
  return (
    <Wrapper>
      <div className="inner-wrapper">
        <div className="text-box">
          EVERY LITTLE COUNTS. SUPPORT THE RIGHT CAMPAIGN and get a merchandise
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
