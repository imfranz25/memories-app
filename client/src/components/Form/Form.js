import React, { useState, useEffect } from 'react'
import "./Form.scss";
import { TextField, Button, Typography, Paper } from "@mui/material/";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../actions/post";

export default function Form({ currentId, setCurrentId }) {
  const dispatch = useDispatch();
  const post = useSelector((state) => currentId ? state.post.find((p) => p._id== currentId) : null);
  const [postData, setpostData] = useState({
    creator: '', title: '', message: '', tags: '', selectedFile: '',
  });

  useEffect(() => {
    if(post) setpostData(post);
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(currentId) {
      dispatch(updatePost(currentId, postData));
    } else {
      dispatch(createPost(postData));
    }
    clear();
  }

  const clear = () => {
    setCurrentId(null);
    setpostData({creator: '', title: '', message: '', tags: '', selectedFile: ''});
  }

  return (
    <Paper>
      <form autoComplete="off" noValidate className="form" onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? 'Editing' : 'Creating'} a Memory</Typography>
        <TextField 
          className="file-input" 
          name="creator" 
          variant="outlined" 
          label="Creator" 
          fullWidth 
          value={postData.creator} 
          onChange={(e) => setpostData({...postData, creator: e.target.value})}
        />
        <TextField 
          className="file-input" 
          name="title" 
          variant="outlined" 
          label="Title" 
          fullWidth 
          value={postData.title} 
          onChange={(e) => setpostData({...postData, title: e.target.value})}
        />
        <TextField 
          className="file-input" 
          name="message" 
          variant="outlined" 
          label="Message" 
          fullWidth 
          value={postData.message} 
          onChange={(e) => setpostData({...postData, message: e.target.value})}
        />
        <TextField 
          className="file-input" 
          name="tags" 
          variant="outlined" 
          label="Tags" 
          fullWidth 
          value={postData.tags} 
          onChange={(e) => setpostData({...postData, tags: e.target.value.split(",")})}
        />
        <div className="file-input">
          <FileBase
            type="file"
            multiple={false}
            onDone={({base64}) => setpostData({...postData, selectedFile: base64 })}
          />
        </div>
        <Button 
          className="btn-submit" 
          variant="contained" 
          color="primary" 
          size="large" 
          type="submit" 
          fullWidth
        >
          Submit
        </Button>
        <Button 
          variant="contained" 
          color="error"
          size="small" 
          type="button" 
          fullWidth
          onClick={clear}
        >
          Clear
        </Button>
      </form>
    </Paper>
  )
}