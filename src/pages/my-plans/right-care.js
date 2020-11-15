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

      {/* <AccordionWrapper>
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
             
            </h1>
          </AccordionSummary>
          <Details>
            <p>
              
            </p>

            <h1>Why</h1>

            <div>
              <Arrow2 style={{ fontSize: 20, color: "red" }} />{" "}
              <p>
                
              </p>
            </div>

            
            

          

            <h1>How</h1>

            <div>
              <Arrow2 style={{ fontSize: 20, color: "red" }} />{" "}
              <p>
                
              </p>
            </div>

            
          </Details>
        </StyledAccordion>
      </AccordionWrapper> */}
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
