import React from "react"

//mui
import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"

export default () => {
  return (
    <Container maxWidth="lg" disableGutters={true}>
      <Grid container spacing={2} alignItems="center" justify="center">
        <Grid item xs={12} sm={4}>
          <h1>Form</h1>
        </Grid>
        <Grid item xs={12} sm={5}>
          <h1>Links</h1>
        </Grid>
        <Grid item xs={12} sm={3}>
          <h1>Logo</h1>
        </Grid>
      </Grid>
    </Container>
  )
}
