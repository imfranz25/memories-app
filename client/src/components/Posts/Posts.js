// Modules
import { useSelector } from 'react-redux';
import { Typography } from '@mui/material';

// Component(s)
import Post from './Post/Post';

function Posts() {
  const posts = useSelector((state) => state.post);
  console.log(posts);
  return (
    <>
      <Typography variant="h5">Posts</Typography>
      <Post />
      <Post />
    </>
  );
}

export default Posts;
