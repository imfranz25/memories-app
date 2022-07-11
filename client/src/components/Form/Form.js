import React, { useState } from 'react'
import "./Form.scss";
import { TextField, Button, Typography, Paper } from "@mui/material/";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { createPost } from "../../actions/post";

export default function Form() {
  const dispatch = useDispatch();
  const [postData, setpostData] = useState({
    creator: '', title: '', message: '', tags: '', selectedFile: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(postData));
  }

  const clear = () => {

  }

  return (
    <Paper>
      <form autoComplete="off" noValidate className="form" onSubmit={handleSubmit}>
        <Typography variant="h6">Creating a Memory</Typography>
        <TextField 
          className="file-input" 
          name="creator" 
          variant="outlined" 
          label="Creator" 
          fullWidth 
          value={postData.creatorName} 
          onChange={(e) => setpostData({...postData, creator: e.target.value})}
        />
        <TextField 
          className="file-input" 
          name="title" 
          variant="outlined" 
          label="Title" 
          fullWidth 
          value={postData.creatorName} 
          onChange={(e) => setpostData({...postData, title: e.target.value})}
        />
        <TextField 
          className="file-input" 
          name="message" 
          variant="outlined" 
          label="Message" 
          fullWidth 
          value={postData.creatorName} 
          onChange={(e) => setpostData({...postData, message: e.target.value})}
        />
        <TextField 
          className="file-input" 
          name="tags" 
          variant="outlined" 
          label="Tags" 
          fullWidth 
          value={postData.creatorName} 
          onChange={(e) => setpostData({...postData, tags: e.target.value})}
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