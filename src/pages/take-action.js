import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { styled } from "twin.macro"

//mui
import Grid from "@material-ui/core/Grid"

//components
import Layout from "../components/Layout"
import Connect from "../components/Connect"
import Video from "../components/Video"

export default () => {
  const data = useStaticQuery(graphql`
    {
      thumb1: file(relativePath: { eq: "ad.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      thumb2: file(relativePath: { eq: "music-video.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      thumb3: file(relativePath: { eq: "vote.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Wrapper>
        <Heading>
          <h1 className="heading">
            <span className="sub-1">Why</span>{" "}
            <span className="sub-2">Vote</span>{" "}
            <span className="sub-3">For Me</span>
          </h1>
        </Heading>

        <GridWrapper container>
          <Grid item xs={12} md={12} lg={4}>
            <div className="plan-box plan-box-1">
              <h1 className="reason">Reason 1</h1>
              <p className="text">
                There is a way that politicians must serve the people. The right
                way to do it is always to put the interests of the people we
                serve first, before our politics. Across the political spectrum
                that seems to be lacking. That is why I joined politics and
                asking for the people's vote - for us to begin always to put the
                people first, no matter the perceived inconvenience to our party
                politics.
              </p>
            </div>
          </Grid>
          <Grid item xs={12} md={12} lg={4}>
            <div className="plan-box plan-box-2">
              <h1 className="reason">Reason 2</h1>
              <p className="text">
                I have plans that are directly relevant to the people of Tema
                Central. Yes, my party has a good manifesto for the whole
                country. But I have taken it a step further by coming up with
                plans that designed specifically for the Tema Central
                Constituency. Plans and would directly touch the lives of
                families in Tema Central. I have done this because the people of
                Tema Central are important to me. This is the second reason why
                I humbly ask for your vote to serve as the MP for Tema Central
                Constituency.
              </p>
            </div>
          </Grid>

          <Grid item xs={12} md={12} lg={4}>
            <div className="plan-box plan-box-3">
              <h1 className="reason">Reason 3</h1>
              <p className="text">
                Often, after the elections, the average Voter does not benefit
                or get the attention of their MP. It is always the people in the
                party close to the MP who seem to benefit the most. Yet the MP
                relies on the vote of the average Voter to get elected. I
                promise to be an MP for all of you equally, with no favouritism.
                That is why my campaign slogan is Together, the Right Way.
              </p>
            </div>
          </Grid>
        </GridWrapper>

        <div style={{ backgroundColor: "#ecf0f1" }}>
          <h3 className="red-text">
            If you believe in my message and what I stand for. I humbly ask for
            your support in this election. Please vote for me.
          </h3>
        </div>
        <Header>
          <div className="wrapper">
            <div className="number">
              <p></p>
            </div>
            <h1 className="text">Campaign Ad</h1>
          </div>
          <div className="line"></div>
        </Header>
        <Vid
          thumb={data.thumb1.childImageSharp.fluid}
          videoSrc="https://www.youtube.com/embed/8FCwDZPioHw"
        />
        <Header>
          <div className="wrapper">
            <div className="number">
              <p></p>
            </div>
            <h1 className="text">Campaign Song</h1>
          </div>
          <div className="line"></div>
        </Header>
        <Vid
          thumb={data.thumb2.childImageSharp.fluid}
          videoSrc="https://www.youtube.com/embed/J9u_UbfhE0E"
        />
        <Header>
          <div className="wrapper">
            <div className="number">
              <p></p>
            </div>
            <h1 className="text">Go Vote</h1>
          </div>
          <div className="line"></div>
        </Header>
        <Vid
          thumb={data.thumb3.childImageSharp.fluid}
          videoSrc="https://www.youtube.com/embed/TKLfs6ixPM4"
        />
        <Connect />
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.div`
  .hero {
    position: relative;
    margin: 10px 0;
  }

  .overlay {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(50, 50, 50, 0.5);
    width: 100%;
    z-index: 3;
    height: 50vh;

    @media screen and (min-width: 768px) {
      height: 80vh;
    }
  }

  .title {
    color: #fff;
    font-size: 25px;
    font-weight: 700;
    text-transform: uppercase;
    width: 65vw;
    padding-left: 5px;

    @media screen and (min-width: 768px) {
      width: 50vw;
      font-size: 50px;
      letter-spacing: -0.9px;
      margin-bottom: 10px;
      padding-left: 10px;
    }
  }

  .plan-box {
    height: 400px;
    background-color: #ecf0f1;
    color: #fff;
    cursor: pointer;
    padding: 15px;
    margin-bottom: 15px;
    @media screen and (min-width: 768px) {
      margin: 10px 5px;
    }

    &-1 {
      background-color: var(--ndc-black);
    }

    &-2 {
      background-color: var(--ndc-red);
    }

    &-3 {
      background-color: var(--ndc-green);
    }
  }

  .reason {
    font-size: 30px;

    @media screen and (min-width: 768px) {
      font-size: 40px;
    }
  }

  .red-text {
    text-align: center;
    color: var(--ndc-red);
    font-size: 20px;
    padding: 5px;
    font-weight: 700;
  }
`

const Vid = styled(Video)`
  padding-bottom: 10px;
`
const GridWrapper = styled(Grid)`
  margin-bottom: 0px;
`

const Heading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .heading {
    display: inline-block;
    margin: 0 auto;
    text-align: center;
    font-size: 30px;
    padding: 10px;
    font-weight: 600;

    @media screen and (min-width: 768px) {
      font-size: 70px;
    }
  }

  .sub-1 {
    color: var(--ndc-black);
  }

  .sub-2 {
    color: var(--ndc-red);
  }

  .sub-3 {
    color: var(--ndc-green);
  }
`

const Header = styled.div`
  margin-top: 35px;

  @media screen and (min-width: 768px) {
    margin-top: 40px;
    margin-left: 10px;
  }

  .wrapper {
    display: flex;
    /* justify-content: center; */
    align-items: center;
    padding-bottom: 5px;
    padding-left: 2px;
  }

  .number {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--ndc-red);
    color: white;
    width: 60px;
    height: 60px;
    font-size: 34px;
    font-weight: 600;

    @media screen and (min-width: 768px) {
      width: 120px;
      height: 120px;
      font-size: 50px;
    }
  }

  .text {
    font-size: 23px;
    font-weight: 700;
    text-transform: uppercase;
    padding-left: 2px;

    @media screen and (min-width: 768px) {
      font-size: 50px;
      padding-left: 20px;
      width: 800px;
    }
  }

  .line {
    width: 100vw;
    height: 5px;
    background-color: var(--ndc-red);

    @media screen and (min-width: 768px) {
      width: 80vw;
    }
  }
`
