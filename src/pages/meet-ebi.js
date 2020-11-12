import React from "react"
import { styled } from "twin.macro"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

//mui
import { Grid } from "@material-ui/core"
import Hidden from "@material-ui/core/Hidden"

//components
import Layout from "../components/Layout"
import Header from "../components/SectionHeader"

export default () => {
  const data = useStaticQuery(graphql`
    {
      hero: file(relativePath: { eq: "meet-ebi.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      image: file(relativePath: { eq: "ebi2.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      logo: file(relativePath: { eq: "main.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }

      ndclogo: file(relativePath: { eq: "ndc-logo2.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }

      img1: file(relativePath: { eq: "section1a.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }

      img2: file(relativePath: { eq: "section1b.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }

      img3: file(relativePath: { eq: "section2a.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }

      img4: file(relativePath: { eq: "section3a.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }

      img5: file(relativePath: { eq: "section3b.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }

      img6: file(relativePath: { eq: "section3c.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }

      img7: file(relativePath: { eq: "section3d.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }

      img8: file(relativePath: { eq: "section3e.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }

      img9: file(relativePath: { eq: "section3f1.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }

      img10: file(relativePath: { eq: "section3g2.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Hero>
        <Overlay>
          <div>
            <h1 className="heading">Meet</h1>
          </div>

          <Logo fluid={data.logo.childImageSharp.fluid} />
        </Overlay>

        <ImageBox>
          <Img
            fluid={data.hero.childImageSharp.fluid}
            style={{ position: "static" }}
          />
        </ImageBox>
      </Hero>

      <Intro>
        <p>
          Ebi is the Candidate for Parliament for the Tema Central Constituency
          contesting on the ticket of the National Democratic Congress (NDC) in
          this 2020 elections.
        </p>
      </Intro>

      <Section>
        <Header num={1} text="early years in tema central" />

        <p className="para">
          Ebi's history with the constituency runs deep. She moved to Tema
          Community 7, with her mother in 1993. Before her move to Tema, four
          generations of her family have lived in Tema. Through the seventies
          and early eighties, Ebi's mother was a teacher in Tema, and later
          becoming the Head Teacher at Community 8 No. 2 School. So, for Ebi,
          Tema is home and a family affair. It is in these communities she
          experienced her fondest childhood memories and saw first-hand, the
          deterioration and some of the improvements that have occurred, over
          the decades, in the neighbourhoods of Tema Central.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Img
            fluid={data.img1.childImageSharp.fluid}
            style={{ width: "100vw", height: 500 }}
          />
        </div>

        <div
          style={{
            marginTop: 20,
          }}
        >
          <Grid container>
            <Grid
              item
              xs={12}
              sm={6}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 20,
              }}
            >
              <p className="para">
                By the time she was fourteen years old, Ebi had had the chance
                to record and perform with some renowned artists and talents
                from Tema. She worked with the likes of Nana Fynn, Felix Owusu,
                Sammy B, and, Willy Roy, to name a few. She still proudly claims
                her ties to Tema’s Artistes and Art scene as her first true
                love.
              </p>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Img
                fluid={data.img2.childImageSharp.fluid}
                style={{ height: 500 }}
              />
            </Grid>
          </Grid>
        </div>
      </Section>

      <Section>
        <Header num={2} text="adult life & career" />

        <p className="para">
          Ebi studied Management at the University of Leicester, United Kingdom.
          She speaks French at an upper-intermediate level and has a Level Four
          French language proficiency awarded by le Centre International de
          Recherche et d' Etudes de Langues (CIREL), France. Ebi also holds a
          First Degree in Development Communication (First Class Honours) from
          the African University College of Communications (AUCC); An Executive
          Masters in Alternative Dispute Resolution (ADR); and is currently
          concluding her Masters in Global Diplomacy with SOAS University of
          London.
        </p>

        <p className="para">
          Before becoming the NDC Candidate for Parliament for the Tema Central
          Constituency, Ebi has had diverse professional experiences which have
          enriched and sharpened her leadership skills. She worked as Head of
          Product Development and Marketing at Riskuwa Telecom, a start-up she
          helped establish in 2002.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: 10,
            paddingTop: 10,
          }}
        >
          <Img
            fluid={data.img3.childImageSharp.fluid}
            style={{ width: "100vw" }}
          />
        </div>
        <p className="para">
          Between 2009 – 2015 she worked in the movie industry and has over 30
          movies to her name. During the same period between 2010 – 2012, she
          also worked in the media as host of a late-night TV Show on TV3 and
          has been the consistent host of GTV’s yearly ‘Valentine Card’.
          Leveraging her experiences and education, Ebi became more and more the
          industrious entrepreneur. She established a thriving business in
          Interior Architectural design and supply of construction materials to
          clients in Ghana, Togo, and Nigeria.
        </p>

        <p className="para">
          Currently, Ebi is the Managing Director for Earthnic Vantage, a firm
          she set up that specialises in the assessment, and training of human
          capital needs, as well as communication and coaching for senior
          management of businesses. Ebi also founded the Academy of Creative
          Arts, an NGO that promotes African historical and socio-cultural
          education through the training of young people in visual, theatre and
          vocational arts. In 2018, she teamed up with the prolific Lawyer and
          Marriage Counsellor Ogochukwu Nweke, to co-found the 42nd Heritage
          International providing pro-bono Leadership Training, Mentorship,
          Conflict Management, and Mediation Assistance.
        </p>
      </Section>

      <Section>
        <Header num={3} text="community involvement & life in politics" />

        <p className="para">
          Her passion for social causes and Pan-Africanism put her on the path
          to active politics. Being the daughter of parents who work in
          academia, Ebi has always been an intellectually curious, socially
          conscious and an outspoken person; a trait she developed as a young
          person from her parents. Her parents challenged her thinking about our
          society, our challenges and our strengths. They raised her to be
          principled and empathetic, and encouraged her to speak up for what she
          believed in.
        </p>

        <p className="para">
          Her fellow Tema Central constituents who have known Ebi through the
          years can attest to her kind and infectious "I'm for the people"
          attitude. She grew up with a penchant for structure, honesty and a
          "can do" approach to everything, no matter how daunting it seemed.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Img
            fluid={data.img4.childImageSharp.fluid}
            style={{ width: "100vw" }}
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Img
            fluid={data.img5.childImageSharp.fluid}
            style={{ width: "100vw" }}
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Img
            fluid={data.img6.childImageSharp.fluid}
            style={{ width: "100vw" }}
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: 20,
            position: "relative",
          }}
        >
          <Img
            fluid={data.img10.childImageSharp.fluid}
            style={{ width: "100vw" }}
          />

          <Hidden smDown>
            <div
              style={{
                position: "absolute",
                bottom: 0,
                right: 240,
                backgroundColor: "#fff",
                width: "60vw",
              }}
            >
              <p className="para">
                Ebi's proactiveness to champion social good; her critical
                reflection of the current state of affairs in our country; her
                educational training as a Development Communicator; and her
                genuine love for Tema, led her to the decision to seek elected
                office to become the Member of Parliament for the Tema Central
                Constituency first in 2016, and again in 2020.{" "}
              </p>
            </div>
          </Hidden>
        </div>

        <div
          style={{
            marginTop: 20,
          }}
        >
          <Grid container>
            <Grid
              item
              xs={12}
              md={12}
              lg={6}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 20,
              }}
            >
              <Hidden mdUp>
                <p className="para">
                  Ebi's proactiveness to champion social good; her critical
                  reflection of the current state of affairs in our country; her
                  educational training as a Development Communicator; and her
                  genuine love for Tema, led her to the decision to seek elected
                  office to become the Member of Parliament for the Tema Central
                  Constituency first in 2016, and again in 2020.{" "}
                </p>
              </Hidden>
              <p className="para">
                In her capacity as an ordinary private citizen and role as a
                Candidate for Parliament, Ebi has, in her own small way,
                contributed towards her community and the NDC Party.
              </p>

              <p className="para1">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginRight: 10,
                  }}
                >
                  <Img
                    fluid={data.ndclogo.childImageSharp.fluid}
                    style={{
                      width: 20,
                      height: 20,
                    }}
                  />
                </div>
                In 2016 she helped raise funds to fix over 200 new streetlights
                and refurbished the old ones in the Tema Central Constituency.
              </p>
              <p className="para1">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginRight: 10,
                  }}
                >
                  <Img
                    fluid={data.ndclogo.childImageSharp.fluid}
                    style={{
                      width: 20,
                      height: 20,
                    }}
                  />
                </div>
                She has been involved in helping improve sanitation in
                neighbourhoods within the Tema Central Constituency. She helped
                cover some open gutters in Community 7 and donated refuse bins
                to schools and police stations.
              </p>
              <p className="para1">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginRight: 10,
                  }}
                >
                  <Img
                    fluid={data.ndclogo.childImageSharp.fluid}
                    style={{
                      width: 20,
                      height: 20,
                    }}
                  />
                </div>
                Ebi supported some of the youth in the constituency to renovate
                the basketball court in Community 4 and also installed
                floodlights so games can be played at night as well.
              </p>
              <p className="para1">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginRight: 10,
                  }}
                >
                  <Img
                    fluid={data.ndclogo.childImageSharp.fluid}
                    style={{
                      width: 20,
                      height: 20,
                    }}
                  />
                </div>
                She donated benches and math sets to some schools within the
                Tema Central Constituency and sponsored quizzes for JHS students
                in Complex No. 8 School.
              </p>
              <p className="para1">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginRight: 10,
                  }}
                >
                  <Img
                    fluid={data.ndclogo.childImageSharp.fluid}
                    style={{
                      width: 20,
                      height: 20,
                    }}
                  />
                </div>
                Ebi regularly works with people with disabilities in the
                community, and on numerous occasions, made donations to
                churches, mosques, and orphanages.
              </p>
            </Grid>

            <Grid item xs={12} md={12} lg={6}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Img
                  fluid={data.img7.childImageSharp.fluid}
                  style={{ width: "100vw" }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Img
                  fluid={data.img8.childImageSharp.fluid}
                  style={{ width: "100vw" }}
                />
              </div>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={12} md={12} lg={6}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: 20,
                }}
              >
                <Img
                  fluid={data.img9.childImageSharp.fluid}
                  style={{ width: "100vw" }}
                />
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              md={12}
              lg={6}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 20,
              }}
            >
              <p className="para1">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginRight: 10,
                  }}
                >
                  <Img
                    fluid={data.ndclogo.childImageSharp.fluid}
                    style={{
                      width: 20,
                      height: 20,
                    }}
                  />
                </div>
                In the past, she has also organised health screening for
                community members, especially the aged.
              </p>
              <p className="para1">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginRight: 10,
                  }}
                >
                  <Img
                    fluid={data.ndclogo.childImageSharp.fluid}
                    style={{
                      width: 20,
                      height: 20,
                    }}
                  />
                </div>
                Ebi is a Patron of the Tema Arts Festival, yearly arts and small
                business festival held in Tema. She is also a Patron to the Tema
                Bikefest and the Bright Angels Masquerade group in the
                constituency.
              </p>
              <p className="para1">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginRight: 10,
                  }}
                >
                  <Img
                    fluid={data.ndclogo.childImageSharp.fluid}
                    style={{
                      width: 20,
                      height: 20,
                    }}
                  />
                </div>
                When it comes to Ebi's contribution to her party in the
                constituency, Ebi facilitated the furnishing of the NDC Tema
                Central Constituency Office and provided over GHs 65,000 worth
                of quality chairs and tables to the branches.
              </p>
              <p className="para1">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginRight: 10,
                  }}
                >
                  <Img
                    fluid={data.ndclogo.childImageSharp.fluid}
                    style={{
                      width: 20,
                      height: 20,
                    }}
                  />
                </div>
                In addition, she is formidably competing in a constituency that
                is traditionally seen as an opposition safe seat, Ebi's
                candidature, together with her work with constituency
                executives, has increased the much-needed visibility of the NDC
                Party within the constituency and invigorated the interest of
                constituents and the pride of party sympathisers.
              </p>
            </Grid>
          </Grid>
        </div>
      </Section>

      <Section>
        <Header2>
          <div className="wrapper">
            <div className="number">
              <p>4</p>
            </div>
            <h1 className="text">
              <span className="sub-1">Together</span>{" "}
              <span className="sub-2">The</span>{" "}
              <span className="sub-3">Right Way</span>
            </h1>
          </div>
          <div className="line"></div>
        </Header2>

        <p className="para">
          Ebi Bright calls her campaign for the 2020 elections in the Tema
          Central Constituency
        </p>

        <p className="para2">
          <span className="sub-1">The</span>{" "}
          <span className="sub-2">Right</span>{" "}
          <span className="sub-3">Campaign</span>
        </p>

        <p className="para">
          Joining politics to become the Member of Parliament for the Tema
          Central Constituency is Ebi's way of fighting to make the right
          difference. She is seeking the support of her constituents in this
          election so that she can champion fresh ideas and the right way of
          doing things. Ebi firmly believes that working together with her
          constituents; she can provide fair and nonpartisan opportunities to
          all people of the Tema Central Constituency, not just a few.
        </p>

        <div
          style={{
            marginTop: 20,
          }}
        >
          <Grid container>
            <Grid item xs={12} sm={6}>
              <Img4 fluid={data.image.childImageSharp.fluid} />
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 20,
              }}
            >
              <p className="para" style={{ fontWeight: 800 }}>
                Ebi grew up believing that Tema is the best place to be in
                Ghana; she is ready to work with the people of Tema Central to
                make the constituency the envy of others.
              </p>
            </Grid>
          </Grid>
        </div>
      </Section>
    </Layout>
  )
}

const Hero = styled.div`
  position: relative;
  height: 40vh;

  @media screen and (min-width: 768px) {
    height: 80vh;
  }
`

export const Overlay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 3;
  height: 40vh;

  @media screen and (min-width: 768px) {
    height: 80vh;
    padding-left: 50px;
  }

  @media screen and (min-width: 1025px) {
    height: 80vh;
    padding-left: 150px;
  }

  .heading {
    font-size: 44px;
    font-weight: 800;
    text-transform: uppercase;
    padding-left: 1px;

    @media screen and (min-width: 768px) {
      font-size: 120px;
      font-weight: 700;
    }
  }

  .text {
    font-size: 25px;

    @media screen and (min-width: 768px) {
      font-size: 25px;
    }
  }
`

const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 40vh;
  position: absolute;
  right: 0;
  bottom: 0;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    right: 0;
    width: 500px;
    height: 80vh;
  }
`

const Logo = styled(Img)`
  width: 160px;

  @media screen and (min-width: 768px) {
    width: 500px;
  }

  @media screen and (min-width: 1025px) {
    width: 650px;
  }
`

const Intro = styled.div`
  padding: 30px;
  font-size: 25px;
  color: var(--text-color);
`

const Section = styled.div`
  .para {
    padding: 10px 30px;
    font-size: 25px;
    color: var(--text-color);
  }

  .para1 {
    display: flex;
    padding: 10px 30px;
    font-size: 20px;
    color: var(--ndc-red);
  }

  .para2 {
    padding: 0 30px;
    font-size: 25px;
    color: var(--text-color);
  }

  .sub-1 {
    color: var(--ndc-red);
    text-transform: uppercase;
    font-weight: 500;
  }

  .sub-2 {
    color: var(--ndc-black);
    text-transform: uppercase;
    font-weight: 500;
  }

  .sub-3 {
    color: var(--ndc-green);
    text-transform: uppercase;
    font-weight: 500;
  }
`

const Img4 = styled(Img)`
  height: 500px;

  @media screen and (min-width: 768px) {
    height: 700px;
  }
`

const Header2 = styled.div`
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

  .sub-1 {
    color: var(--ndc-red);
    font-weight: 700;
  }

  .sub-2 {
    color: var(--ndc-black);
    font-weight: 700;
  }

  .sub-3 {
    color: var(--ndc-green);
    font-weight: 700;
  }
`
