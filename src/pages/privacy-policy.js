import React from "react"

//mui
import Container from "@material-ui/core/Container"

//components
import Layout from "../components/Layout"

export default () => {
  return (
    <Layout>
      <h1
        style={{
          fontSize: 35,
          textAlign: "center",
          marginTop: 20,
          fontWeight: 600,
        }}
      >
        Privacy Policy
      </h1>
      <Container
        maxWidth="md"
        disableGutters={false}
        style={{ marginBottom: 20 }}
      >
        <p style={{ marginTop: 10, fontSize: 18 }}>
          This Privacy Policy explains how the Ebi Bright campaign collects,
          uses, and discloses information about you when you access or use our
          websites, mobile sites, and mobile application that link to this
          Privacy Policy (collectively, the “Site”).
        </p>

        <p style={{ marginTop: 10, fontSize: 18 }}>
          We may change this Privacy Policy from time to time. If we make
          changes, we will notify you by revising the date at the top of the
          policy and, in some cases, we may provide you with additional notice
          (such as adding a statement to our website homepage or sending you a
          notification). We encourage you to review the Privacy Policy whenever
          you access the Site or otherwise interact with us to stay informed
          about our information practices and the choices available to you.
        </p>

        <p style={{ marginTop: 10, fontSize: 18 }}>
          We collect information you provide directly to us. For example, we
          collect information when you sign up to receive updates, request
          information, fill out a form, sign a petition, sign up as a volunteer,
          sign up for an event, create an account, participate in a contest or
          promotion, make a donation or purchase, communicate with us via third
          party social media sites, request support, send us an email, or
          otherwise communicate with us. The types of information we may collect
          include your name, email address, postal address, phone number, credit
          card and other payment information (although payment information is
          generally collected directly by a third-party processor), and any
          other information you choose to provide.
        </p>

        <p style={{ marginTop: 10, fontSize: 18 }}>
          We and our service providers may also obtain information about you
          from other sources and combine that with information we collect about
          you on our Site. For example, we and our service providers may collect
          information about you from third parties. Also, if you create or log
          into your account through a social media site, we will have access to
          certain information from that site, such as your name, account
          information, and friends lists, depending on your privacy settings on
          that social media site and the site’s privacy policy.
        </p>

        <p style={{ marginTop: 10, fontSize: 18 }}>
          We may allow others to provide analytics services and serve
          advertisements on our behalf across the web and in mobile
          applications. These entities may use cookies, web beacons, device
          identifiers and other technologies to collect information about your
          use of the Site and other websites and applications, including your IP
          address, web browser, mobile network information, pages viewed, time
          spent on pages or in apps, links clicked, and conversion information.
          This information may be used by the Campaign and others to, among
          other things, analyze and track data, determine the popularity of
          certain content, deliver advertising and content targeted to your
          interests on our Site and other websites, and better understand your
          online activity.
        </p>
      </Container>
    </Layout>
  )
}
