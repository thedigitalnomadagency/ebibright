import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { styled } from "twin.macro"

//components
import Layout from "../../components/Layout"
import Video from "../../components/Video"

//mui
import Accordion from "@material-ui/core/Accordion"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import AccordionSummary from "@material-ui/core/AccordionSummary"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import Arrow2 from "@material-ui/icons/ArrowForwardIos"

export default () => {
  const data = useStaticQuery(graphql`
    {
      acc: file(relativePath: { eq: "1.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const [expanded, setExpanded] = React.useState(false)

  const handleChange = panel => (_, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <Layout>
      <Video
        thumb={data.acc.childImageSharp.fluid}
        videoSrc="https://www.youtube.com/embed/9Qq5GjIb7Do"
      />

      <AccordionWrapper>
        <StyledAccordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ fontSize: 40 }} />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <h1 className="heading">
              Set-up an MP Office in the Tema Central Constituency
            </h1>
          </AccordionSummary>
          <Details>
            <p>
              The office would be a point of contact between the MP and
              Constituents. It would be a place that would allow for nonpartisan
              engagement with community members; something that that traditional
              constituency party office cannot achieve.
            </p>

            <h1>Why</h1>

            <div>
              <Arrow2 style={{ fontSize: 20, color: "red" }} />{" "}
              <p>
                I want to ensure that once I am voted as MP for Tema Central, we
                will all put the party politics of the campaign behind us and
                forge forward together with the right way.
              </p>
            </div>

            <div>
              <Arrow2 style={{ fontSize: 20, color: "red" }} />{" "}
              <p>
                I want to vigorously promote the active participation of
                constituents in community affairs. It's not good enough for
                constituents to sit on the side-lines, watching on whiles the MP
                does what he/she wants for four years.
              </p>
            </div>

            <div>
              <Arrow2 style={{ fontSize: 20, color: "red" }} />
              <p>
                To do this, I need to create a neutral platform that allows all
                constituents, irrespective of their party preference, to feel
                comfortable to engage with the development of our constituency.
              </p>
            </div>

            <div>
              <Arrow2 style={{ fontSize: 20, color: "red" }} />
              <p>
                I want a place where my constituents can access me when they are
                looking for me. They do not have to come, all the way, to
                Parliament just to be able to see their MP. After all, when I
                was seeking their vote, I came to them, why should they have to
                find it challenging to get in touch with me after the elections.
              </p>
            </div>

            <h1>How</h1>

            <div>
              <Arrow2 style={{ fontSize: 20, color: "red" }} />{" "}
              <p>
                The office would be open on weekdays from 8 am – 5 pm and have a
                full-time staff that would attend to Constituents that visit the
                office.
              </p>
            </div>

            <div>
              <Arrow2 style={{ fontSize: 20, color: "red" }} />{" "}
              <p>
                I will have office hours that ensures that at least two days in
                a month I would be available at the MP's office to meet my
                constituents. Any member of the Tema Central community can walk
                in and discuss with me directly any issues concerning our
                community that need my attention.
              </p>
            </div>

            <div>
              <Arrow2 style={{ fontSize: 20, color: "red" }} />{" "}
              <p>
                The office will promote an atmosphere and culture that
                encourages constituents to be comfortable to walk in to report
                local problems and make suggestions on issues that need
                addressing within the community. E.g. land encroachment,
                sanitation issues, noise pollution, safety issues, etc. so
                together we can build our community for ourselves.
              </p>
            </div>
          </Details>
        </StyledAccordion>
      </AccordionWrapper>

      <AccordionWrapper>
        <StyledAccordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ fontSize: 40 }} />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <h1 className="heading">
              Regularly make time to listen and interact with my constituents
            </h1>
          </AccordionSummary>
          <Details>
            <h1>Why</h1>

            <div>
              <Arrow2 style={{ fontSize: 20, color: "red" }} />{" "}
              <p>
                To solicit and understand the views and opinions of my
                constituents on issues that Parliament discusses and debates.
                This way that I can effectively advocate, from an informed
                position, for the interest of all my people in Tema Central.
              </p>
            </div>

            <div>
              <Arrow2 style={{ fontSize: 20, color: "red" }} />{" "}
              <p>
                To be able to provide regular updates to my constituents on
                development progress in the constituency.
              </p>
            </div>

            <h1>How</h1>

            <div>
              <Arrow2 style={{ fontSize: 20, color: "red" }} />{" "}
              <p>
                <span style={{ fontWeight: 600 }}>
                  I will do this in two ways:
                </span>

                <div style={{ display: "flex" }}>
                  &#8226;{"  "}
                  <p style={{ marginLeft: 5 }}>
                    Once a month, I will organize town hall meetings which will
                    be open to all people of Tema Central.
                  </p>
                </div>

                <div style={{ display: "flex" }}>
                  &#8226;{"  "}
                  <p style={{ marginLeft: 5 }}>
                    Beavailable in the Constituency Office, at least two times a
                    month to meet directly with my constituents.
                  </p>
                </div>
              </p>
            </div>

            <div>
              <Arrow2 style={{ fontSize: 20, color: "red" }} />{" "}
              <p>
                <span style={{ fontWeight: 600 }}>
                  During the town-hall meetings or one-on-one meetings at the
                  Constituency Office, I will be able to :
                </span>
                <div style={{ display: "flex" }}>
                  &#8226;{"  "}
                  <p style={{ marginLeft: 5 }}>
                    Update and explain to my Constituents matters already
                    discussed in Parliament and share with them the Agenda of
                    upcoming issues to be considered in Parliament to seek their
                    opinions.
                  </p>
                </div>

                <div style={{ display: "flex" }}>
                  &#8226;{"  "}
                  <p style={{ marginLeft: 5 }}>
                    Provide updates on development projects within our
                    community.
                  </p>
                </div>
              </p>
            </div>
          </Details>
        </StyledAccordion>
      </AccordionWrapper>

      <AccordionWrapper>
        <StyledAccordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ fontSize: 40 }} />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <h1 className="heading">Promote financial transparency</h1>
          </AccordionSummary>
          <Details>
            <h1>Why</h1>

            <div>
              <Arrow2 style={{ fontSize: 20, color: "red" }} />{" "}
              <p>To always be accountable to my constituents</p>
            </div>

            <h1>How</h1>

            <div>
              <Arrow2 style={{ fontSize: 20, color: "red" }} />{" "}
              <p>
                Openly publish to constituents all funds that I receive for
                community development. I will declare in simplified financial
                statement the amounts I received; when I received the funds; and
                all expenses from these funds.
              </p>
            </div>

            <div>
              <Arrow2 style={{ fontSize: 20, color: "red" }} />{" "}
              <p>
                I will publish details of all contracts and projects undertaken
                using these funds – so that all of us can also hold accountable
                those who are paid to undertake development projects for the
                community.
              </p>
            </div>

            <div>
              <Arrow2 style={{ fontSize: 20, color: "red" }} />{" "}
              <p>
                I will make openly publish all names and amounts paid to anyone,
                contractor, or company awarded contracts to undertake projects
                in the community. We will all be watchdogs to ensure the right
                thing is always done.
              </p>
            </div>
          </Details>
        </StyledAccordion>
      </AccordionWrapper>

      <AccordionWrapper>
        <StyledAccordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ fontSize: 40 }} />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <h1 className="heading">
              Set-up an MP Accountability Tracking System
            </h1>
          </AccordionSummary>
          <Details>
            <h1>Why</h1>

            <div>
              <Arrow2 style={{ fontSize: 20, color: "red" }} />{" "}
              <p>
                In keeping with my insistence on always being accountable to the
                people of Tema Central, it is important to me to set-up a system
                that allows all constituents to track the progress of my work
                against the promises I made to them during the campaign{" "}
              </p>
            </div>

            <h1>How</h1>

            <div>
              <Arrow2 style={{ fontSize: 20, color: "red" }} />{" "}
              <p>
                The accountability tracking system would be in the form of an
                online dashboard that mentions all my campaign promises and
                tracks how many of these promises I am fulfilling over time
              </p>
            </div>

            <div>
              <Arrow2 style={{ fontSize: 20, color: "red" }} />{" "}
              <p>
                This accountability tracking system will also provide an
                opportunity for me to openly and honestly share with my
                constituents any challenges that may be hindering progress of my
                plans for our community.
              </p>
            </div>
          </Details>
        </StyledAccordion>
      </AccordionWrapper>

      <AccordionWrapper>
        <StyledAccordion
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ fontSize: 40 }} />}
            aria-controls="panel5bh-content"
            id="panel5bh-header"
          >
            <h1 className="heading">
              Foster a strong and cordial working relationship with the local
              assembly structure
            </h1>
          </AccordionSummary>
          <Details>
            <p>
              Irrespective of the appointing Government, I will build a close
              working relationship with the local assembly structure – Tema
              Metropolitan Assembly (TMA), Assembly Men and Women and Unit
              Committee Members.
            </p>
            <h1>Why</h1>

            <div>
              <Arrow2 style={{ fontSize: 20, color: "red" }} />{" "}
              <p>
                I want to build a community that is united; a community whose
                progress is not hampered because the MP belongs to one party and
                the Tema Mayor, or the Assembly Men and Women or the Unit
                Committee members belong to another party.
              </p>
            </div>

            <div>
              <Arrow2 style={{ fontSize: 20, color: "red" }} />{" "}
              <p>
                We as candidates for Parliament have collectively created a
                misleading impression to voters that they should look up mainly
                to MPs to fix the developmental challenges of the community. Yet
                fixing our development challenges at the community level is one
                of the primary responsibilities of the Local Assembly and the
                appointed Mayor or District Chief Executive (DCE), not the MP.
                The Local Assemblies are given more resources to handle our
                local development needs. The TMA, for example, has expertise
                with about 16 different departments, such as the Education,
                Youth and Sports Department, Physical Planning Department,
                Social Welfare and Community Development Department, etc. and
                more importantly the funding from the District Assembly Common
                Fund (DACF) and Internally Generated Funds (IGF) to drive
                development within our communities. The MP does not have
                available to him or her these resources. If elected as MP, I am
                determined to foster a nonpartisan cohesive working with the TMA
                and other Assembly Members to effectively channel these
                resources towards the development of Tema Central.
              </p>
            </div>

            <div>
              <Arrow2 style={{ fontSize: 20, color: "red" }} />{" "}
              <p>
                I will be a strong voice for development advocacy and lobby for
                Tema Central to ensure that the MP and the Local Assembly
                structure are both working purposefully for the development our
                communities.
              </p>
            </div>

            <h1>How</h1>

            <div>
              <Arrow2 style={{ fontSize: 20, color: "red" }} />{" "}
              <p>
                Put a spotlight on the work of the Tema Metropolitan Assembly
                (TMA)
              </p>
            </div>

            <div>
              <Arrow2 style={{ fontSize: 20, color: "red" }} />{" "}
              <p>
                Build a strong working relationship with the TMA, Assembly Men
                and Women and Unit Committee Members to address our community
                challenges properly, so we call contribute towards working to
                fix Tema Central to make it the envy of other constituencies.
              </p>
            </div>
          </Details>
        </StyledAccordion>
      </AccordionWrapper>
    </Layout>
  )
}

const AccordionWrapper = styled.div`
  margin: 25px 0;

  .heading {
    font-size: 18px;
    max-width: "90%";
    font-weight: 400px;
    color: var(--ndc-red);

    @media screen and (min-width: 768px) {
      font-size: 35px;
      line-height: 50px;
    }
  }
`

const StyledAccordion = styled(Accordion)`
  padding: 15px 0;
`

const Details = styled(AccordionDetails)`
  flex-direction: column;

  h1 {
    color: #fff;
    background-color: var(--ndc-green);
    border-radius: 150px;
    padding: 10px;
    width: 100px;
    text-align: center;
    margin: 20px 0;
  }

  div {
    display: flex;
  }

  p {
    margin-bottom: 5px;
  }
`
