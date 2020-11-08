import React from "react"
import { styled } from "twin.macro"
import Img from "gatsby-image"
import IconButton from "@material-ui/core/IconButton"
import PlayIcon from "@material-ui/icons/PlayCircleFilled"
import Dialog from "@material-ui/core/Dialog"

export default ({ thumb, videoSrc }) => {
  const [open, setOpen] = React.useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Video>
      <Overlay>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="play"
          style={{ outline: "none" }}
          onClick={handleOpen}
        >
          <Icon />
        </IconButton>
      </Overlay>
      <Thumb fluid={thumb} />

      <Dialog open={open} onClose={handleClose}>
        <Player>
          <iframe
            title="video player"
            style={{ height: "100%", width: "100%" }}
            src={videoSrc}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullscreen
          ></iframe>
        </Player>
      </Dialog>
    </Video>
  )
}

const Video = styled.div`
  position: relative;
`

const Icon = styled(PlayIcon)`
  font-size: 75px;

  @media screen and (min-width: 768px) {
    height: 90px;
  }
`

const Thumb = styled(Img)`
  height: 50vh;

  @media screen and (min-width: 768px) {
    height: 80vh;
  }
`

export const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(50, 50, 50, 0.4);
  width: 100%;
  z-index: 3;
  height: 50vh;

  @media screen and (min-width: 768px) {
    height: 80vh;
  }
`

const Player = styled.div`
  width: 400px;
  height: 350px;

  @media screen and (min-width: 768px) {
    width: 600px;
    height: 400px;
  }
`
