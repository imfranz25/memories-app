import mongoose, { isValidObjectId } from 'mongoose';
import PostMessage from '../models/postMessage.js';

const getPosts = async (req, res, next) => {
  try {
    const postMessages = await PostMessage.find();
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const createPost = async (req, res, next) => {
  const post = req.body;
  const newPost = new PostMessage(post);

  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const deletePost = async (req, res, next) => {
  const { postId } = req.params;
  try {
    if (!mongoose.isValidObjectId(postId)) {
      return res.status(404).json({ message: 'Post not found !' });
    }

    const deletedPost = await PostMessage.findByIdAndDelete(postId);
    res.status(200).json(deletedPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const updatePost = async (req, res, next) => {
  const { postId } = req.params;
  const { title, message, creator, tags, selected } = req.body;

  if (!mongoose.isValidObjectId(postId)) {
    return res.status(404).json({ message: 'Post not found !' });
  }

  try {
    const post = await PostMessage.findById(postId);

    if (!post) {
      return res.status(404).json({ message: 'Post not found!' });
    }

    post.title = title;
    post.message = message;
    post.creator = creator;
    post.tags = tags;
    post.selectedFile = selectedFile;

    const updatedPost = await post.save();
    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export { getPosts, createPost, updatePost, deletePost };
