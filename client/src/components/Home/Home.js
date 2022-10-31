import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Grid, Grow } from '@mui/material';

// Actions
import { getPosts } from '../../actions/posts';

// Components
import Form from '../../components/Form/Form';
import Posts from '../../components/Posts/Posts';

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const [currentPostId, setCurrentPostId] = useState();

  return (
    <Grow in>
      <Container>
        <Grid container justify="space-between" alignItems="stretch" spacing={3}>
          <Grid item xs={12} md={4}>
            <Form currentPostId={currentPostId} setCurrentPostId={setCurrentPostId} />
          </Grid>
          <Grid item xs={12} md={8}>
            <Posts setCurrentPostId={setCurrentPostId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
}

export default Home;
