// Modules
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';

// Actions
import { deletePost } from '../../../actions/posts.js';

//Resources
import './styles.css';

function Post({ post }) {
  const dispatch = useDispatch();
  const handleDelete = (postId) => {
    dispatch(deletePost(postId));
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
          <Button style={{ color: 'white' }} size="small" onClick={() => {}}>
            <MoreHorizIcon fontSize="medium" />
          </Button>
        </div>
        <div className="details">
          <Typography variant="body2" color="textSecondary">
            {post.tags.map((tag) => `#${tag} `)}
          </Typography>
        </div>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            {post.message}
          </Typography>
        </CardContent>
        <CardActions className="card-actions">
          <Button size="small" color="primary" onClick={() => {}}>
            <ThumbUpIcon fontSize="medium" style={{ marginRight: '5px' }} />
            Like
            <div style={{ marginLeft: '5px' }}>{post.likeCount}</div>
          </Button>
          <Button
            size="small"
            color="error"
            onClick={() => {
              handleDelete(post._id);
            }}
          >
            <DeleteIcon fontSize="medium" />
            Delete
          </Button>
        </CardActions>
      </Card>
    </>
  );
}

export default Post;
