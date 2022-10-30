import { useState } from 'react';
import { TextField, Paper, Button, Typography } from '@mui/material';
import FileBase from 'react-file-base64';

// Resources
import './style.css';

function Form() {
  const [postData, setPostData] = useState({
    creator: '',
    title: '',
    message: '',
    tags: [],
    selectedFile: '',
  });

  const clearForm = () => {
    setPostData({
      creator: '',
      title: '',
      message: '',
      tags: [],
      selectedFile: '',
    });
  };

  const handleSubmit = () => {
    alert('post submitted');
  };

  return (
    <Paper className="paper">
      <form autoComplete="off" className="form" onSubmit={handleSubmit} noValidate>
        <Typography variant="h6">Creating a Memory</Typography>
        <TextField
          name="creator"
          label="Creator"
          variant="outlined"
          value={postData.creator}
          onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
          fullWidth
        />
        <TextField
          name="title"
          label="Title"
          variant="outlined"
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
          fullWidth
        />
        <TextField
          name="message"
          label="Message"
          variant="outlined"
          value={postData.message}
          onChange={(e) => setPostData({ ...postData, message: e.target.value })}
          fullWidth
        />
        <TextField
          name="tags"
          label="Tags"
          variant="outlined"
          value={postData.tags}
          onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
          fullWidth
        />
        <div className="file-input">
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
          />
        </div>
        <Button type="submit" variant="contained" color="primary" size="large" fullWidth>
          Submit
        </Button>
        <Button variant="contained" color="secondary" size="smail" onClick={clearForm} fullWidth>
          Clear
        </Button>
      </form>
    </Paper>
  );
}

export default Form;
