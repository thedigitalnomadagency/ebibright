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
      thumb: file(relativePath: { eq: "2.png" }) {
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
        videoSrc="https://www.youtube.com/embed/FnIEs-QjvB0"
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
              Setup Homework Centres across each community to provide a safe and
              comfortable place for after school learning.
            </h1>
          </AccordionSummary>
          <Details>
            <p>
              My desire is to promote safe, responsible, and engaged education
              for the children in our communities. I plan to do this by
              undertaking two key initiatives in education. The first is to set
              up Homework Centres.
            </p>

            <h1>Why</h1>

            <div>
              <Arrow2 style={{ fontSize: 20, color: "red" }} />{" "}
              <p>
                As I move around, I noticed that in some Tema Central
                neighbourhoods our school children do not have adequate and
                comfortable spaces to do their homework and after school
                studies. It is common to see children sitting on small stools on
                their compounds or in front of their parents' shops trying to do
                their homework or learn, especially in the evenings. The
                environment often has poor lightening and uncomfortable sitting.
              </p>
            </div>

            <h1>How</h1>

            <div>
              <Arrow2 style={{ fontSize: 20, color: "red" }} />{" "}
              <p>
                My idea is to set up Homework Centres that will serve as a safe,
                comfortable space for children to go after school to do their
                homework and learn.
              </p>
            </div>

            <div>
              <Arrow2 style={{ fontSize: 20, color: "red" }} />{" "}
              <p>
                The Homework Centres will be in the form of furnished containers
                that have adequate seats, proper lighting and ventilation.
              </p>
            </div>

            <div>
              <Arrow2 style={{ fontSize: 20, color: "red" }} />{" "}
              <p>
                The Homework Centres will be placed all across communities and
                be a safe walking distance from the homes of children.
              </p>
            </div>

            <div>
              <Arrow2 style={{ fontSize: 20, color: "red" }} />{" "}
              <p>
                The Homework Centres will be open between 3 PM - 9 PM daily, and
                each Centre will have a volunteer supervisor that manages the
                place and keeps an eye on the children.
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
              Organise the{" "}
              <span style={{ fontWeight: 600 }}>TC Solutions Challenge</span>
            </h1>
          </AccordionSummary>
          <Details>
            <p>
              The second of the two initiatives I have for education is the{" "}
              <span style={{ fontWeight: 600 }}>TC Solutions Challenge</span>. I
              hope through this initiative; I can promote an engaged education
              for students in Tema Central.
            </p>

            <p>
              The TC Solution Challenge will be an annual competitive programme
              for students in secondary, technical, and vocational schools in
              Tema Central to identify a community problem and come up with
              their own solutions to addressing the problem for the community.
            </p>
            <h1>Why</h1>

            <div>
              <Arrow2 style={{ fontSize: 20, color: "red" }} />{" "}
              <p>
                The hope here is that through this programme we would be able to
                instil in our young ones a sense of responsibility and ownership
                towards their community. And in doing so broaden the horizon of
                our young ones and sharpen their problem-solving skills.
              </p>
            </div>

            <h1>How</h1>

            <div>
              <Arrow2 style={{ fontSize: 20, color: "red" }} />{" "}
              <p>
                I will work with Headteachers of secondary, technical and
                vocational in Tema Central to set up the TC Solution Challenge
                programme.
              </p>
            </div>

            <div>
              <Arrow2 style={{ fontSize: 20, color: "red" }} />{" "}
              <p>
                Second-year students will be put into groups, and these groups
                would be tasked to go into the communities to identify a
                community challenge. Then the students will come up with a
                solution to fix the problem they identified in the community.
              </p>
            </div>

            <div>
              <Arrow2 style={{ fontSize: 20, color: "red" }} />{" "}
              <p>
                The problems and solutions presented by the students will be
                assessed, and the group that comes up with a solution that would
                have the most impact in the community will be supported by the
                MP with resources to implement their solution for the community.
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
              Create a structured mentorship programme for young people in Tema
              Central{" "}
            </h1>
          </AccordionSummary>
          <Details>
            <p>
              I plan to create a structured mentorship programme that connects
              young people to accomplished and experienced residents of Tema
              Central. So that these young people have the opportunity to learn,
              develop and make informed decisions about the next steps for their
              education and career
            </p>

            <h1>Why</h1>

            <div>
              <Arrow2 style={{ fontSize: 20, color: "red" }} />{" "}
              <p>
                There are a considerable number of young people in our
                community, who more than financial help, need guidance and
                direction on what to do next for their educational and career
                path. In Tema Central we have equally accomplished persons who
                are willing to spare some time to provide guidance, to share
                their experiences, and to inspire young people on the next steps
                to take in their educational and career development.{" "}
              </p>
            </div>

            <h1>How</h1>

            <div>
              <Arrow2 style={{ fontSize: 20, color: "red" }} />{" "}
              <p>
                Identify accomplished professionals within Tema Central who are
                willing to volunteer a few hours each month for mentorship.
              </p>
            </div>

            <div>
              <Arrow2 style={{ fontSize: 20, color: "red" }} />{" "}
              <p>
                Connect young people to volunteer mentors in specific fields of
                interest.
              </p>
            </div>

            <div>
              <Arrow2 style={{ fontSize: 20, color: "red" }} />{" "}
              <p>
                Manage the mentorship programme to ensure that both mentor and
                mentee get the best out of the programme.
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
              Setup <span style={{ fontWeight: 600 }}>TC Connect</span> – a
              digitised platform to help job seekers and small businesses in
              Tema Central
            </h1>
          </AccordionSummary>
          <Details>
            <p>
              <span style={{ fontWeight: 600 }}>
                Honest but difficult truth:
              </span>{" "}
              I cannot promise my constituents I will give them jobs. This is
              because an MPs role as a lawmaker does not make it easy to focus
              on creating the large number of sustainable jobs we need for young
              people in Tema Central.
            </p>

            <p>
              Also, from a principled standpoint, I am against the use of
              protocol list to get jobs for just a few people who may be
              perceived to be close to me. While my other constituents are
              denied that same opportunity.
            </p>

            <p>
              So, I have put together a simple solution. I call it{" "}
              <span style={{ fontWeight: 600 }}>TC Connect</span>. TC Connect is
              a digitised platform that will help job seekers and small
              businesses in Tema Central connect with employment opportunities
              and business services in the general Tema area.
            </p>

            <h1>Why</h1>

            <div>
              <Arrow2 style={{ fontSize: 20, color: "red" }} />{" "}
              <p>
                Just like other parts of Ghana, youth unemployment or
                underemployment is a huge problem for our community. In Tema
                Central specifically, nearly 3 out of every 5 young persons
                between 18 - 35 years is looking for a job or wants a better job
                that matches their capability or experience levels.
              </p>
            </div>

            <h1>How</h1>

            <p>
              The TC Connect Platform will leverage technology to organically
              promote small businesses and connect constituents to employment
              opportunities within the general Tema area. The TC Connect has two
              components:
            </p>

            <div>
              <Arrow2 style={{ fontSize: 20, color: "red" }} />{" "}
              <p>
                <span style={{ fontWeight: 600 }}>
                  First – Connect businesses (goods and service providers) in
                  the community to consumers in Tema Central and the Tema
                  Metropolis at large
                </span>
                <div style={{ display: "flex" }}>
                  &#8226;{"  "}
                  <p style={{ marginLeft: 5 }}>
                    To do this, I will build the TC Connect database that
                    compiles a list, description, and contacts of all small
                    business and service providers in Tema Central
                  </p>
                </div>

                <div style={{ display: "flex" }}>
                  &#8226;{"  "}
                  <p style={{ marginLeft: 5 }}>
                    TC Connect can be accessed on mobile or web app, USSD or
                    through a phone call.
                  </p>
                </div>

                <div style={{ display: "flex" }}>
                  &#8226;{"  "}
                  <p style={{ marginLeft: 5 }}>
                    Consumers in Tema Central can therefore now easily find and
                    access goods and services close to them, instead of going
                    outside the community to find similar services.
                  </p>
                </div>

                <div style={{ display: "flex" }}>
                  &#8226;{"  "}
                  <p style={{ marginLeft: 5 }}>
                    Example, when a constituent is looking for someone to braid
                    their hair at home, or a make-up artist, a plumber, a Fridge
                    or an AC Repairer, a Mechanic, a Private Tutor for their
                    Kids, a Driver, an Electrician, etc., they can use TC
                    Connect to find that service provider from the community.
                  </p>
                </div>

                <div style={{ display: "flex" }}>
                  &#8226;{"  "}
                  <p style={{ marginLeft: 5 }}>
                    By connecting businesses to consumers in Tema Central this
                    way, we can help each other grow, expand our businesses, and
                    generate employment from within Tema Central.
                  </p>
                </div>
              </p>
            </div>

            <div>
              <Arrow2 style={{ fontSize: 20, color: "red" }} />{" "}
              <p>
                <span style={{ fontWeight: 600 }}>
                  Second – Connect job seekers in Tema Central to employment
                  opportunities within the constituency.
                </span>

                <div style={{ display: "flex" }}>
                  &#8226;{"  "}
                  <p style={{ marginLeft: 5 }}>
                    Put together short profiles and skillsets of all
                    constituents seeking employment in Tema Central into the TC
                    Connect database. The database will be regularly updated.
                  </p>
                </div>

                <div style={{ display: "flex" }}>
                  &#8226;{"  "}
                  <p style={{ marginLeft: 5 }}>
                    Information of jobseekers on the TC Connect platform will be
                    shared with all employers and businesses in Tema so that
                    anytime they are seeking to employ they have a one-stop
                    portal to search for matching candidates in Tema Central.
                    This gives the opportunity to persons seeking employment in
                    Tema Central first, before considering others outside Tema
                    Central.
                  </p>
                </div>

                <div style={{ display: "flex" }}>
                  &#8226;{"  "}
                  <p style={{ marginLeft: 5 }}>
                    I believe this would be a win-win situation for both the
                    community and the businesses that operate in the community.
                    For these businesses, by employing community members, who
                    live within the catchment area of their business, they would
                    be cutting commute times as well as the transport cost of
                    their workers. Importantly, it will be a way for these
                    businesses and employers to give back to the Tema Central
                    community in which they operate.
                  </p>
                </div>
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
              Start and grow a small fund to support entrepreneurs and small
              businesses in Tema Central
            </h1>
          </AccordionSummary>
          <Details>
            <h1>Why</h1>

            <div>
              <Arrow2 style={{ fontSize: 20, color: "red" }} />{" "}
              <p>
                To provide coaching and financial support for start-ups and
                small businesses in Tema Central to scale-up or stabilise their
                businesses.
              </p>
            </div>

            <h1>How</h1>

            <div>
              <Arrow2 style={{ fontSize: 20, color: "red" }} />{" "}
              <p>
                My goal to raise GHS 100,000 to start the fund. This will be
                achieved through fundraising efforts and events both within and
                outside Tema Central.
              </p>
            </div>

            <div>
              <Arrow2 style={{ fontSize: 20, color: "red" }} />{" "}
              <p>
                To ensure that any qualified person in our community can fairly
                access the fund in a nonpartisan way, I will not be directly be
                involved in managing or disbursing the fund to people who apply.
              </p>
            </div>

            <div>
              <Arrow2 style={{ fontSize: 20, color: "red" }} />{" "}
              <p>
                A management team made up of accomplished people in Tema
                Central, who are considered as respectable, independent, and
                nonpartisan will be put together to administer the fund.
              </p>
            </div>

            <div>
              <Arrow2 style={{ fontSize: 20, color: "red" }} />{" "}
              <p>
                This independent management team will review requests for
                funding and make final decisions on who to disburse to, with no
                involvement or influence from the MP to ensure that the fund is
                available to all fairly and on merit only.
              </p>
            </div>

            <div>
              <Arrow2 style={{ fontSize: 20, color: "red" }} />{" "}
              <p>
                Funds would be disbursed on loan or equity basis depending on
                the type of business and amount required.
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
              Support farmers in Tema Central to help transport their produce to
              the market
            </h1>
          </AccordionSummary>
          <Details>
            <h1>Why</h1>

            <div>
              <Arrow2 style={{ fontSize: 20, color: "red" }} />{" "}
              <p>
                Did you know there are farms in Tema Central? One of the
                challenges farmers in is how to transport their produce to the
                market for sale.
              </p>
            </div>

            <h1>How</h1>

            <div>
              <Arrow2 style={{ fontSize: 20, color: "red" }} />{" "}
              <p>
                Make available for hire at discount prices, three Aboboya
                vehicles (tricycle cart) that farmers in Tema Central can use to
                transport their produce to the market.
              </p>
            </div>
          </Details>
        </StyledAccordion>
      </AccordionWrapper>

      <AccordionWrapper>
        <StyledAccordion
          expanded={expanded === "panel7"}
          onChange={handleChange("panel7")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ fontSize: 40 }} />}
            aria-controls="panel7bh-content"
            id="panel7bh-header"
          >
            <h1 className="heading">
              Organise the <span style={{ fontWeight: 600 }}>TC Showcase</span>{" "}
              - a quarterly carnival in Tema Central
            </h1>
          </AccordionSummary>
          <Details>
            <p>
              The <span style={{ fontWeight: 600 }}>TC Showcase</span> would be
              a 3-day weekend quarterly festival that brings together the
              community to participate in business and arts.
            </p>
            <h1>Why</h1>

            <div>
              <Arrow2 style={{ fontSize: 20, color: "red" }} />{" "}
              <p>
                To use the event to regularly put spotlight on businesses and to
                promote the arts in the Tema Central community.
              </p>
            </div>

            <h1>How</h1>

            <div>
              <Arrow2 style={{ fontSize: 20, color: "red" }} />{" "}
              <p>
                The TC Showcase would be a 3-days weekend carnival to be held 4
                times a year.
              </p>
            </div>

            <div>
              <Arrow2 style={{ fontSize: 20, color: "red" }} />{" "}
              <p>
                As part of the TC Showcase, there would be a sales fair for
                businesses to display their goods and services in the community.
                Businesses originating from Tema Central will get discounts on
                stalls to showcase their goods and services.
              </p>
            </div>

            <div>
              <Arrow2 style={{ fontSize: 20, color: "red" }} />{" "}
              <p>
                <span>
                  A key component of TC Showcase is promoting the arts and
                  sciences in Tema Central. This would include: A key component
                  of TC Showcase is promoting the arts and sciences in Tema
                  Central. This would include:
                </span>
                <div style={{ display: "flex" }}>
                  &#8226;{"  "}
                  <p style={{ marginLeft: 5 }}>
                    Unearthing music talent – by giving opportunities for new
                    music talents in the community to perform live on stage.
                  </p>
                </div>

                <div style={{ display: "flex" }}>
                  &#8226;{"  "}
                  <p style={{ marginLeft: 5 }}>
                    Community members organising drama shows
                  </p>
                </div>

                <div style={{ display: "flex" }}>
                  &#8226;{"  "}
                  <p style={{ marginLeft: 5 }}>Comic performances</p>
                </div>

                <div style={{ display: "flex" }}>
                  &#8226;{"  "}
                  <p style={{ marginLeft: 5 }}>Art exhibitions</p>
                </div>

                <div style={{ display: "flex" }}>
                  &#8226;{"  "}
                  <p style={{ marginLeft: 5 }}>Science exhibitions</p>
                </div>

                <div style={{ display: "flex" }}>
                  &#8226;{"  "}
                  <p style={{ marginLeft: 5 }}>Other talent exhibitions</p>
                </div>
              </p>
            </div>
          </Details>
        </StyledAccordion>
      </AccordionWrapper>

      <AccordionWrapper>
        <StyledAccordion
          expanded={expanded === "panel8"}
          onChange={handleChange("panel8")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ fontSize: 40 }} />}
            aria-controls="panel8bh-content"
            id="panel8bh-header"
          >
            <h1 className="heading">
              Organise competitive sporting events in football, basketball,
              draft game, and e-sports.
            </h1>
          </AccordionSummary>
          <Details>
            <h1>Why</h1>

            <p>
              I have four identified sports popular sports and pastimes that
              community members regularly do for enjoyment. I plan to make these
              four activities – football, basketball, draft and e-sports – more
              engaging and competitive. This will promote cohesion and
              neighbourliness within our community, at the same time providing
              an opportunity to unearth some talents in these activities.
            </p>

            <p>
              My hope is that with the proper structured and transparent
              organisation of these sporting activities, community interest and
              participation will increase. And over time, these activities will
              be able to attract good sponsorship from businesses and community
              members to keep going.
            </p>

            <h1>How</h1>

            <div>
              <Arrow2 style={{ fontSize: 20, color: "red" }} />{" "}
              <p>
                <span style={{ fontWeight: 600 }}>Football:</span>

                <div style={{ display: "flex" }}>
                  &#8226;{"  "}
                  <p style={{ marginLeft: 5 }}>
                    Setup a 20-team league for residents in Tema Central.
                  </p>
                </div>

                <div style={{ display: "flex" }}>
                  &#8226;{"  "}
                  <p style={{ marginLeft: 5 }}>
                    The league will run for ten months each year.
                  </p>
                </div>

                <div style={{ display: "flex" }}>
                  &#8226;{"  "}
                  <p style={{ marginLeft: 5 }}>
                    Prize money for winners of the league.
                  </p>
                </div>
              </p>
            </div>

            <div>
              <Arrow2 style={{ fontSize: 20, color: "red" }} />{" "}
              <p>
                <span style={{ fontWeight: 600 }}>Basketball:</span>
                <div style={{ display: "flex" }}>
                  &#8226;{"  "}
                  <p style={{ marginLeft: 5 }}>
                    Setup a 20-team league for residents in Tema Central.
                  </p>
                </div>

                <div style={{ display: "flex" }}>
                  &#8226;{"  "}
                  <p style={{ marginLeft: 5 }}>
                    The league will run for ten months each year.
                  </p>
                </div>

                <div style={{ display: "flex" }}>
                  &#8226;{"  "}
                  <p style={{ marginLeft: 5 }}>
                    Prize money for winners of the league.
                  </p>
                </div>
              </p>
            </div>

            <div>
              <Arrow2 style={{ fontSize: 20, color: "red" }} />{" "}
              <p>
                <span style={{ fontWeight: 600 }}>Draft Games:</span>

                <div style={{ display: "flex" }}>
                  &#8226;{"  "}
                  <p style={{ marginLeft: 5 }}>
                    Set-up a draft competition based on a point-based league
                    structure where 150 – 200 residents can participate.
                  </p>
                </div>

                <div style={{ display: "flex" }}>
                  &#8226;{"  "}
                  <p style={{ marginLeft: 5 }}>
                    It will start with community qualifiers, e.g. players in
                    Community 9 will play among each other. Winners within
                    communities move to play with other players from other
                    communities in the next round until a champion is crowned
                    for Tema Central.
                  </p>
                </div>

                <div style={{ display: "flex" }}>
                  &#8226;{"  "}
                  <p style={{ marginLeft: 5 }}>
                    Prize money for the person who wins the draft league.
                  </p>
                </div>
              </p>
            </div>

            <div>
              <Arrow2 style={{ fontSize: 20, color: "red" }} />{" "}
              <p>
                <span style={{ fontWeight: 600 }}>E-sports & Gaming:</span>

                <div style={{ display: "flex" }}>
                  &#8226;{"  "}
                  <p style={{ marginLeft: 5 }}>
                    E-sports is a sports competition using video games. In 2019
                    the e-sports industry made 1.1 billion dollars in revenue.
                    It has over 500 million people viewing gaming competitions
                    from all over the world online and on TV.
                  </p>
                </div>

                <div style={{ display: "flex" }}>
                  &#8226;{"  "}
                  <p style={{ marginLeft: 5 }}>
                    These days playing games and e-sports is not just for
                    entertainment. It is now a big global professional sport.
                  </p>
                </div>

                <div style={{ display: "flex" }}>
                  &#8226;{"  "}
                  <p style={{ marginLeft: 5 }}>
                    Tema Central has a lot of young people who enjoy playing
                    games and e-sports. I will support the infrastructure needed
                    to organise gaming competitions. Through these competitions,
                    we can unearth talents that can participate in international
                    gaming and e-sports competitions such as the NBA 2K League,
                    FIFA Interactive World Cup (FIWC), etc.
                  </p>
                </div>
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
