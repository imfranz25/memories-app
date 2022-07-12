import axios from "axios";

const URL = "https://francis-memories.herokuapp.com/post";

export const fetchPost = () => axios.get(URL);
export const createPost = (newPost) => axios.post(URL, newPost);
export const updatePost = (id, updatedPost) => axios.patch(`${URL}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${URL}/${id}`);
export const likePost = (id) => axios.patch(`${URL}/${id}/likePost`);