// Modules
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';

// Actions
import { deletePost, likePost } from '../../../actions/posts.js';

//Resources
import './styles.css';

function Post({ post, setCurrentPostId }) {
  const dispatch = useDispatch();
  const handleDelete = (postId) => {
    const isConfirmDelete = window.confirm('Are you sure you want to delete this post?');
    if (isConfirmDelete) dispatch(deletePost(postId));
  };
  return (
    <>
      <Card className="card">
        <CardMedia className="media" image={post.selectedFile} title={post.title} />
        <div className="overlay">
          <Typography variant="h6">{post.creator}</Typography>
          <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
        </div>
        <div className="overlay2">
          <Button
            style={{ color: 'white' }}
            size="small"
            onClick={() => {
              setCurrentPostId(post._id);
            }}
          >
            <MoreHorizIcon fontSize="medium" />
          </Button>
        </div>
        <div className="details">
          <Typography variant="body2" color="textSecondary">
            {post.tags.map((tag) => `#${tag} `)}
          </Typography>
        </div>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            {post.title}
          </Typography>
          <Typography variant="body2" gutterBottom>
            {post.message}
          </Typography>
        </CardContent>
        <CardActions className="card-actions">
          <Button
            size="small"
            color="primary"
            onClick={() => {
              dispatch(likePost(post._id));
            }}
          >
            <ThumbUpIcon fontSize="medium" style={{ marginRight: '5px' }} />
            &nbsp; Like &nbsp;
            {post.likeCount}
          </Button>
          <Button
            size="small"
            color="error"
            onClick={() => {
              handleDelete(post._id);
            }}
          >
            <DeleteIcon fontSize="medium" />
            &nbsp; Delete
          </Button>
        </CardActions>
      </Card>
    </>
  );
}

export default Post;
