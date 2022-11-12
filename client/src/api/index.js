import axios from 'axios';

const URL = 'http://localhost:8080';

// Post API Endpoints
export const fetchPost = () => axios.get(`${URL}/posts`);
export const createPost = (newPost) => axios.post(`${URL}/posts`, newPost);
export const updatePost = (postId, updatedPost) =>
  axios.patch(`${URL}/posts/${postId}`, updatedPost);
export const likePost = (postId) => axios.patch(`${URL}/posts//like/${postId}`);
export const deletePost = (postId) => axios.delete(`${URL}/posts/${postId}`);

// Auth API Endpoints
export const createUser = (newUser) => axios.post(`${URL}/auth/register`);
