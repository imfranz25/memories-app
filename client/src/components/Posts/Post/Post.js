import React from 'react'
import moment from "moment";
import { 
  Card, 
  CardActions, 
  CardContent, 
  CardMedia, 
  Button, 
  Typography, 
} from "@mui/material/";
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DeleteIcon from '@mui/icons-material/Delete';
import "./Post.scss";
import { useDispatch } from "react-redux";
import { deletePost, likePost } from "../../../actions/post";

export default function Post({post, setCurrentId}) {
  const dispatch = useDispatch();

  return (
    <Card className="card">
      <CardMedia className="media" image={post.selectedFile} title={post.title} />
      <div className="overlay">
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
      </div>
      <div className="overlay-2">
        <Button 
          style={{color: "white"}} 
          size="small" 
          onClick={() => setCurrentId(post._id)}
        >
          <MoreHorizIcon fontSize="small"/>
        </Button>
      </div>
      <div className="details">
        <Typography variant="body2" color="textSecondary">
          {post.tags.map((tag, index) => <span key={tag+index}>#{tag}</span>)}
        </Typography>
      </div>
      <Typography variant="h5" gutterBottom className="title">
          {post.title}
      </Typography> 
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {post.message}
        </Typography> 
      </CardContent>
      <CardActions className="card-actions">
        <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}>
          <ThumbUpAltIcon fontSize="small" />
          Like
          {post.likeCount}
        </Button>
         <Button size="small" color="error" onClick={() => dispatch(deletePost(post._id))}>
          <DeleteIcon fontSize="small" />
          Delete
        </Button>
      </CardActions>
    </Card>
  )
}