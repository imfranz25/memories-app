import * as api from '../api/index';
import { FETCH_ALL, CREATE } from '../constants/action';

const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPost();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

const createPost = (newPost) => async (dispatch) => {
  newPost = { ...newPost, tags: newPost.tags.split(',') };
  try {
    const { data } = await api.createPost(newPost);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export { getPosts, createPost };
