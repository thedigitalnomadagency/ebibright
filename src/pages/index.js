import React from "react"

//components
import Layout from "../components/Layout"
import Images from "../components/Images"
import Countdown from "../components/Countdown"

export default function Home() {
  return (
    <Layout>
      <Images />
      <Countdown
        timeTillDate="09 01 2020, 8:00 am"
        timeFormat="MM DD YYYY, h:mm a"
      />
    </Layout>
  )
}
