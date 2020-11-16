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
      thumb: file(relativePath: { eq: "3.png" }) {
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
        thumb={data.thumb.childImageSharp.fluid}
        videoSrc="https://www.youtube.com/embed/DrR89C1j9d0"
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
              Start a Community Welfare Fund for community members who
              occasionally need support
            </h1>
          </AccordionSummary>
          <Details>
            <h1>Why</h1>

            <div>
              <Arrow2 style={{ fontSize: 20, color: "red" }} />{" "}
              <p>
                As a country, we are yet to put in place a welfare system to
                identify and support our vulnerable citizens that need
                assistance with their basic sustenance needs.
              </p>
            </div>

            <div>
              <Arrow2 style={{ fontSize: 20, color: "red" }} />{" "}
              <p>
                In many communities, MPs are often called upon to fulfil this
                need. And this can be daunting on the meagre financial resources
                available for collective use of the community.
              </p>
            </div>

            <div>
              <Arrow2 style={{ fontSize: 20, color: "red" }} />{" "}
              <p>
                To tackle the issue of diversion of funds allocated for
                constituency use towards assisting our fellow constituents who
                might need financial support for things such as rent, healthcare
                for the elderly, tertiary school fees, etc., I plan to start a
                well-managed Community Welfare Fund to be a separate stream of
                resources from constituency funds, that can be channelled
                towards the needs of constituents who genuinely need financial
                support.
              </p>
            </div>

            <h1>How</h1>

            <div>
              <Arrow2 style={{ fontSize: 20, color: "red" }} />{" "}
              <p>
                I will require the support of all constituents to come up with
                creative ways to generate money for the community welfare fund.
                This will include fundraising events and revenue generated from
                the TC Showcase event, etc.
              </p>
            </div>

            <div>
              <Arrow2 style={{ fontSize: 20, color: "red" }} />{" "}
              <p>
                Money raised for the fund will be managed and disbursed by an
                independent management team of constituents without the
                involvement of the MP.
              </p>
            </div>

            <div>
              <Arrow2 style={{ fontSize: 20, color: "red" }} />{" "}
              <p>
                Constituents can request financial support through the MP
                Office.
              </p>
            </div>

            <div>
              <Arrow2 style={{ fontSize: 20, color: "red" }} />{" "}
              <p>
                Details of constituents who request for support will be
                forwarded to the independent fund management team for review and
                a decision on whether to provide the financial assistance or
                not.
              </p>
            </div>

            <div>
              <Arrow2 style={{ fontSize: 20, color: "red" }} />{" "}
              <p>
                My goal is to ensure that the support we provide our fellow
                vulnerable constituents is transparent, fair, and equitable
                without the appearance of partisan bias. Always the constituents
                first.
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
              Provide social protection assistance to vulnerable community
              members
            </h1>
          </AccordionSummary>
          <Details>
            <h1>Why</h1>

            <div>
              <Arrow2 style={{ fontSize: 20, color: "red" }} />{" "}
              <p>
                Social protection for constituents, especially children, women,
                and workers in abusive or exploitative situations is a cause I
                want to champion.
              </p>
            </div>

            <div>
              <Arrow2 style={{ fontSize: 20, color: "red" }} />{" "}
              <p>
                Ghana has laws which protect our citizens in abusive and
                exploitative situations. However, because of social stigma, fear
                or other social barriers, women and children in violent domestic
                situations, for instance, often fail to report. Even when they
                do report, they often do not get the redress they deserve.
              </p>
            </div>

            <div>
              <Arrow2 style={{ fontSize: 20, color: "red" }} />{" "}
              <p>
                Equally, Ghana has labour laws to safeguard Ghanaian workers
                from being exploited by their employers. But for fear of losing
                their jobs, many of these exploitative situations often go
                unreported.
              </p>
            </div>

            <h1>How</h1>

            <div>
              <Arrow2 style={{ fontSize: 20, color: "red" }} />{" "}
              <p>
                Constituents will be encouraged to report abusive, violent, and
                exploitative domestic or workplace situations to the MP Office
                and relevant state institution such as Domestic Violence &
                Victim Support Unit (DOVVSU), The Women and Juvenile Unit
                (WAJU), Labour Commission, Social Welfare, Rent Control, etc.
              </p>
            </div>

            <div>
              <Arrow2 style={{ fontSize: 20, color: "red" }} />{" "}
              <p>
                Once my office receives a report, I will use the weight and
                influence of my position as an MP to support the constituent to
                get protection and redress through the laws of Ghana and from
                the state institutions set up to help Ghanaian Citizens in
                situations like this.
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
            <h1 className="heading">
              Improve sanitation across the constituency
            </h1>
          </AccordionSummary>
          <Details>
            <h1>Why</h1>

            <div>
              <Arrow2 style={{ fontSize: 20, color: "red" }} />{" "}
              <p>
                Addressing our sanitation issues as a constituency is part of
                providing the RIGHT Care to the constituents.
              </p>
            </div>

            <div>
              <Arrow2 style={{ fontSize: 20, color: "red" }} />{" "}
              <p>
                There are communities in the Tema Central Constituency that have
                had serious waste collection problems that have persisted for
                years.
              </p>
            </div>

            <div>
              <Arrow2 style={{ fontSize: 20, color: "red" }} />{" "}
              <p>
                During election cycles, aspiring MPs or Assemblymen and women
                organise the waste collection in these areas, mainly to attract
                votes. But after the elections, these areas are soon forgotten,
                and the issues persist.
              </p>
            </div>

            <div>
              <Arrow2 style={{ fontSize: 20, color: "red" }} />{" "}
              <p>
                I have a plan I hope will solve this problem once and for all.
              </p>
            </div>

            <h1>How</h1>

            <div>
              <Arrow2 style={{ fontSize: 20, color: "red" }} />{" "}
              <p>
                A key reason identified for the inadequate waste collection
                problem in certain communities in Tema Central is that residents
                do not want to pay for the waste collection. This is either
                because residents deem the price as expensive or they do not
                have bulk cash to pay monthly.
              </p>
            </div>

            <div>
              <Arrow2 style={{ fontSize: 20, color: "red" }} />{" "}
              <p>
                Due to inconsistent payment from residents, waste collection
                trucks are not incentivised to collect waste in these
                communities.
              </p>
            </div>

            <div>
              <Arrow2 style={{ fontSize: 20, color: "red" }} />{" "}
              <p>
                <span style={{ fontWeight: 600 }}>
                  To tackle the problem, my solution is as follows:
                </span>

                <div style={{ display: "flex" }}>
                  <span style={{ fontWeight: 600 }}> 1.</span>
                  <p style={{ marginLeft: 5 }}>
                    I will create "Bin Points" which will operate in a small
                    kiosk, similar to a lotto or mobile money kiosks.
                  </p>
                </div>

                <div style={{ display: "flex" }}>
                  <span style={{ fontWeight: 600 }}> 2.</span>
                  <p style={{ marginLeft: 5 }}>
                    Instead of waiting to have bulk cash to pay for waste
                    collection monthly, residents can now visit these "Bin
                    Points" to pay for waste collection on a pay-as-you-go
                    basis.
                  </p>
                </div>

                <div style={{ display: "flex" }}>
                  <span style={{ fontWeight: 600 }}> 3.</span>
                  <p style={{ marginLeft: 5 }}>
                    Once the resident pays, e.g. GHS 2 at the "Bin Point", the
                    resident will be given a unique (Tema Central branded) bin
                    rubber bag into which to put their garbage.
                  </p>
                </div>

                <div style={{ display: "flex" }}>
                  <span style={{ fontWeight: 600 }}> 4.</span>
                  <p style={{ marginLeft: 5 }}>
                    When the waste collection trucks come around, they will only
                    pick up waste in this particular bin rubber bags.
                  </p>
                </div>

                <div style={{ display: "flex" }}>
                  <span style={{ fontWeight: 600 }}> 5.</span>
                  <p style={{ marginLeft: 5 }}>
                    This way, those who pay and receive these unique bin rubber
                    bags will get their waste collected. Those who do not want
                    to pay and cheat the system by getting the waste collected
                    even though they have not paid cannot do that anymore.
                  </p>
                </div>

                <div style={{ display: "flex" }}>
                  <span style={{ fontWeight: 600 }}> 6.</span>
                  <p style={{ marginLeft: 5 }}>
                    Monies collected at the "Bin Points" will be used to pay the
                    Waste Management Companies, so that they do not have to
                    worry about not being paid or chasing residents to pay for
                    services they have rendered.
                  </p>
                </div>
              </p>
            </div>

            <div>
              <Arrow2 style={{ fontSize: 20, color: "red" }} />{" "}
              <p>
                In communities that have the capacity and are not burdened by
                persistent waste management issues, I will promote domestic
                waste segregation and liaise with waste recycling organisation
                to improve our how waste is managed.
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
              Improve general security in neighbourhoods, particularly community
              car parks
            </h1>
          </AccordionSummary>
          <Details>
            <h1>Why</h1>

            <div>
              <Arrow2 style={{ fontSize: 20, color: "red" }} />{" "}
              <p>
                Almost every community in Tema Central has communal car parks
                for residents to park their vehicles.
              </p>
            </div>

            <div>
              <Arrow2 style={{ fontSize: 20, color: "red" }} />{" "}
              <p>
                Over the years, there has been a phenomenon where residents get
                their car batteries stolen when they park.
              </p>
            </div>

            <div>
              <Arrow2 style={{ fontSize: 20, color: "red" }} />{" "}
              <p>
                This has created a situation where some residents have to remove
                their battery and take it home each time they park for the
                night.
              </p>
            </div>

            <div>
              <Arrow2 style={{ fontSize: 20, color: "red" }} />{" "}
              <p>
                I have a plan to address this issue of insecurity as car parks
                in Tema Central.
              </p>
            </div>

            <h1>How</h1>

            <div>
              <Arrow2 style={{ fontSize: 20, color: "red" }} />{" "}
              <p>Setup a security post at each car park.</p>
            </div>

            <div>
              <Arrow2 style={{ fontSize: 20, color: "red" }} />{" "}
              <p>
                Train volunteer community watchdog groups to provide security at
                car parks throughout the night.
              </p>
            </div>

            <div>
              <Arrow2 style={{ fontSize: 20, color: "red" }} />{" "}
              <p>Provide lighting for all car parks.</p>
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
              Work to attract extra resources for community development
            </h1>
          </AccordionSummary>
          <Details>
            <h1>Why</h1>

            <div>
              <Arrow2 style={{ fontSize: 20, color: "red" }} />{" "}
              <p>
                The statutory funds available for community development and
                projects by Government are insufficient to address challenges in
                our community.
              </p>
            </div>

            <h1>How</h1>

            <div>
              <Arrow2 style={{ fontSize: 20, color: "red" }} />{" "}
              <p>
                I plan to engage private sector players and development partners
                proactively, to advocate on behalf of Tema Central by pointing
                out my commitment to transparent leadership and corruption-free
                use of our limited resources.
              </p>
            </div>

            <div>
              <Arrow2 style={{ fontSize: 20, color: "red" }} />{" "}
              <p>
                The hope is to get these private sector and development partners
                to allocate some of their Corporate Social Responsibility (CSR)
                budgets to help us address some of the challenges in our
                constituency without them being apprehensive that their CSR
                initiatives would promote partisan interests or be
                misappropriated for personal gain.
              </p>
            </div>
          </Details>
        </StyledAccordion>
      </AccordionWrapper>

      <AccordionWrapper>
        <StyledAccordion
          expanded={expanded === "panel6"}
          onChange={handleChange("panel6")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ fontSize: 40 }} />}
            aria-controls="panel6bh-content"
            id="panel6bh-header"
          >
            <h1 className="heading">
              Support social events in the constituency
            </h1>
          </AccordionSummary>
          <Details>
            <h1>Why</h1>

            <div>
              <Arrow2 style={{ fontSize: 20, color: "red" }} />{" "}
              <p>
                It is a common occurrence for MPs to be invited to grace and
                support social events, e.g. funerals, marriage ceremonies, etc
                in the community. Traditionally, MPs provide material and
                financial support for these events.
              </p>
            </div>

            <div>
              <Arrow2 style={{ fontSize: 20, color: "red" }} />{" "}
              <p>
                My plan is to set-up a structured way to materially support
                events such as these that happen in the community. as these that
                happen in the community.
              </p>
            </div>

            <h1>How</h1>

            <div>
              <Arrow2 style={{ fontSize: 20, color: "red" }} />{" "}
              <p>
                I will make available for the constituents 1000 chairs and
                tables and some canopies that any constituent can book for their
                events.
              </p>
            </div>

            <div>
              <Arrow2 style={{ fontSize: 20, color: "red" }} />{" "}
              <p>
                On first come first serve basis, a constituent can book, and
                make a cash deposit at the MP Office to have access to the
                chairs, tables and canopies.
              </p>
            </div>

            <div>
              <Arrow2 style={{ fontSize: 20, color: "red" }} />{" "}
              <p>
                Once the items collected for the event are returned in good
                condition, the constituent’s deposit is returned to them.
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
