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
import Typography from "@material-ui/core/Typography"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"

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
            <h1 className="heading">Sub Heading</h1>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
              feugiat. Aliquam eget maximus est, id dignissim quam.
            </Typography>
          </AccordionDetails>
        </StyledAccordion>
      </AccordionWrapper>
    </Layout>
  )
}

const AccordionWrapper = styled.div`
  margin: 25px 0;

  .heading {
    font-size: 20px;
    text-transform: capitalize;
    max-width: "90%";
    font-weight: 400px;

    @media screen and (min-width: 768px) {
      font-size: 42px;
      line-height: 50px;
    }
  }
`

const StyledAccordion = styled(Accordion)`
  padding: 15px 0;
`
