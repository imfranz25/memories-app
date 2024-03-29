import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, Paper, Button, Typography } from '@mui/material';
import FileBase from 'react-file-base64';

// Actions
import { createPost, updatePost } from '../../actions/posts';

// Resources
import './form-post.css';

function Form({ setCurrentPostId, currentPostId }) {
  const dispatch = useDispatch();
  const post = useSelector((state) =>
    currentPostId ? state.posts.find((p) => p._id === currentPostId) : null
  );
  const [postData, setPostData] = useState({
    creator: '',
    title: '',
    message: '',
    tags: [],
    selectedFile: '',
  });

  const clearForm = (e) => {
    setCurrentPostId(null);
    setPostData({
      creator: '',
      title: '',
      message: '',
      tags: [],
      selectedFile: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentPostId) {
      dispatch(updatePost(currentPostId, postData));
      setCurrentPostId(null);
    } else {
      dispatch(createPost(postData));
    }

    clearForm();
  };

  useEffect(() => {
    if (post) {
      setPostData(post);
    }
  }, [currentPostId, post]);

  return (
    <Paper className="paper__form-post">
      <form autoComplete="off" className="form-post__form-post" onSubmit={handleSubmit} noValidate>
        <Typography variant="h6">{currentPostId ? 'Editing' : 'Creating'} a Memory</Typography>
        <TextField
          name="creator"
          label="Creator"
          variant="outlined"
          value={postData.creator}
          onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
          className="text-field__form-post"
          fullWidth
        />
        <TextField
          name="title"
          label="Title"
          variant="outlined"
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
          className="text-field__form-post"
          fullWidth
        />
        <TextField
          name="tags"
          label="Tags"
          variant="outlined"
          value={postData.tags}
          onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
          className="text-field__form-post"
          fullWidth
        />
        <TextField
          name="message"
          label="Message"
          variant="outlined"
          multiline
          rows={4}
          value={postData.message}
          onChange={(e) => setPostData({ ...postData, message: e.target.value })}
          className="text-field__form-post"
          fullWidth
        />
        <div className="file-input__form-post">
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
          />
        </div>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          className="button-submit__form-post"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="smail"
          onClick={clearForm}
          className="button-submit__form-post"
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
}

export default Form;
