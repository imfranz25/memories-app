import * as api from '../api/index';
import { FETCH_ALL, CREATE, DELETE, UPDATE } from '../constants/actionTypes.js';

const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPost();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

const createPost = (newPost) => async (dispatch) => {
  newPost = { ...newPost, tags: newPost.tags.split(',') };
  try {
    const { data } = await api.createPost(newPost);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

const deletePost = (postId) => async (dispatch) => {
  try {
    const { data } = await api.deletePost(postId);
    dispatch({ type: DELETE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

const updatePost = (postId, updatedPost) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(postId, updatedPost);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

const likePost = (postId) => async (dispatch) => {
  try {
    const { data } = await api.likePost(postId);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export { getPosts, createPost, deletePost, updatePost, likePost };
