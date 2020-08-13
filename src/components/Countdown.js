import React from "react"
import CountdownTimer from "react-component-countdown-timer"

export default () => {
  let settings = {
    count: 1728000,
    border: true,
    showTitle: true,
    noPoints: true,
    size: 40,
  }

  return <CountdownTimer {...settings} />
}
