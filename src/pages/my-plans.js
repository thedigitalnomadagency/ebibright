import React from "react"
import { styled } from "twin.macro"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

//mui
import Grid from "@material-ui/core/Grid"

//components
import Layout from "../components/Layout"

export default () => {
  const data = useStaticQuery(graphql`
    {
      thumb: file(relativePath: { eq: "plans.png" }) {
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
        <div className="hero">
          <div className="overlay">
            <h1 className="title">
              See how ebi's plans could help tema central
            </h1>
          </div>
          <Thumb fluid={data.thumb.childImageSharp.fluid} />
        </div>

        <GridWrapper container spacing={2}>
          <Grid item xs={12} md={12} lg={4}>
            <Link to="/my-plans/right-accountability">
              <div className="plan-box">
                <h1>Right Accountability Plans</h1>
                <p>
                  My Right Accountability Plans are about leading inclusively
                  and transparently. It is about putting the interest of the
                  constituents I serve first before my politics. Even though I
                  am running as an NDC Candidate, I will serve everyone in Tema
                  Central equally and fairly, irrespective of their party. I
                  will not be the kind of MP that only focuses on just a few,
                  mostly party people, around them. To achieve this, I have come
                  up with a set of initiatives under my Right Accountability
                  Plans that will always keep me accountable to the good people
                  of Tema Central.
                </p>
                <p style={{ marginTop: 10, fontWeight: 700 }}>
                  Click to learn more about these plans.
                </p>
              </div>
            </Link>
          </Grid>
          <Grid item xs={12} md={12} lg={4}>
            <Link to="/my-plans/right-opportunity">
              <div className="plan-box">
                <h1>Right Opportunity Plans</h1>
                <p>
                  Under my Right Opportunity Plans, I have come up with simple
                  policies that will help create opportunities for young people
                  and develop the human capital of constituency.
                  <p>
                    As part of my Right Opportunity Plans I have initiatives in:{" "}
                  </p>
                  <p>- Education</p>
                  <p>- Youth Development </p>
                  <p>- Employment</p>
                  <p>- Start-ups (Entrepreneurship) and small businesses</p>
                  <p>- Sports, E-sports and Professional Gaming </p>
                  <p style={{ marginTop: 10, fontWeight: 700 }}>
                    Click to learn more about these plans.
                  </p>
                </p>
              </div>
            </Link>
          </Grid>
          <Grid item xs={12} md={12} lg={4}>
            <Link to="/my-plans/right-care">
              <div className="plan-box">
                <h1>Right Care Plans</h1>
                <p>
                  My Right Care Plan is about providing support and social
                  protection for our vulnerable community members as well as for
                  our children, women, and workers. It is also about keeping our
                  environment clean and about our safety needs in the community.{" "}
                </p>

                <p>
                  More importantly, my Right Care Plans are about working to
                  build sustainable safety nets for vulnerable community members
                  to ensure that resources meant for collective use and
                  constituency development are not diverted to reward
                  individuals for their electoral support or to take care of the
                  personal needs of a few constituents.
                </p>

                <p style={{ marginTop: 10, fontWeight: 700 }}>
                  Click to learn more about these plans.
                </p>
              </div>
            </Link>
          </Grid>
        </GridWrapper>
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
    background-color: rgba(50, 50, 50, 0.6);
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
      font-size: 48px;
      letter-spacing: -0.9px;
      margin-bottom: 10px;
      padding-left: 10px;
    }
  }

  .plan-box {
    height: 500px;
    background-color: #ecf0f1;
    color: var(--ndc-black);
    cursor: pointer;
    padding: 23px;

    @media screen and (min-width: 1024px) {
      height: 415px;
    }

    &:hover {
      background-color: var(--ndc-green);
      color: #fff;
    }

    h1 {
      font-size: 25px;
      font-weight: 700;
      padding-bottom: 9px;
    }
  }
`

const Thumb = styled(Img)`
  height: 50vh;

  @media screen and (min-width: 768px) {
    height: 80vh;
  }
`

const GridWrapper = styled(Grid)`
  margin-bottom: 10px;
`
