import React, { useState, useEffect } from "react"
import moment from "moment"

//styling
import CountWrapper from "./Countdown.styles"

export default ({ timeTillDate, timeFormat }) => {
  const [days, setDays] = useState(undefined)
  const [hours, setHours] = useState(undefined)
  const [minutes, setMinutes] = useState(undefined)
  const [seconds, setSeconds] = useState(undefined)

  useEffect(() => {
    const interval = setInterval(() => {
      const then = moment(timeTillDate, timeFormat)
      const now = moment()
      const countdown = moment(then - now)
      const days = countdown.format("D")
      const hours = countdown.format("HH")
      const minutes = countdown.format("mm")
      const seconds = countdown.format("ss")

      setDays(days)
      setHours(hours)
      setMinutes(minutes)
      setSeconds(seconds)
    }, 1000)

    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  }, [timeTillDate, timeFormat])

  if (!seconds) {
    return null
  }

  return (
    <CountWrapper>
      {days && (
        <div className="countdownItem">
          {days}
          <span>days</span>
        </div>
      )}
      {hours && (
        <div className="countdownItem">
          {hours}
          <span>hours</span>
        </div>
      )}
      {minutes && (
        <div className="countdownItem">
          {minutes}
          <span>minutes</span>
        </div>
      )}
      {seconds && (
        <div className="countdownItem">
          {seconds}
          <span>seconds</span>
        </div>
      )}
    </CountWrapper>
  )
}
