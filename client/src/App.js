import React from 'react'
import { Container, AppBar, Typography, Grow, Grid } from "@mui/material/";

// Assets
import memories from "./images/memories.png";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";

export default function App() {

  return (
    <Container maxWidth="lg">
      <AppBar className="app-bar" position="static" color="inherit">
        <Typography className="app-heading" variant="h2" align="center">
          Memories
        </Typography>
        <img className="app-image" src={memories} alt="Memories" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems = 'stretch' spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}