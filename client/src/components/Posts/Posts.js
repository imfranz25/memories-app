// Modules
import { useSelector } from 'react-redux';
import { Grid, CircularProgress } from '@mui/material';

// Component(s)
import Post from './Post/Post';

function Posts() {
  const posts = useSelector((state) => {
    return state.posts;
  });

  return !posts.length ? (
    <CircularProgress />
  ) : (
    <>
      <Grid className="main-container" alignItems="stretch" spacing={3} container>
        {posts.map((post) => (
          <Grid key={post._id} xs={12} sm={6} item>
            <Post post={post} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Posts;
