// Modules
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container, AppBar, Typography, Grid, Grow } from '@mui/material';

// Resources
import './app.css';
import memories from './images/memories.png';

// Components
import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';

// Actions
import { getPosts } from './actions/posts';

function App(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar className="app-bar" position="static">
        <Typography className="heading" variant="h2" align="center">
          Memories
          <img className="image" src={memories} alt="memories" />
        </Typography>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} md={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} md={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
