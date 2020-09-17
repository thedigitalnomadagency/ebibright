import React from "react"

//components
import Layout from "../components/Layout/Layout"
import Hero from "../components/Hero/Hero"
import Donations from "../components/DonationsSection/Donations"

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Donations />
    </Layout>
  )
}
