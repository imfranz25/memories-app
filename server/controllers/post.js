import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
  try {
    const postMessage = await PostMessage.find();
    res.status(200).json(postMessage);
  } catch(e) {
    res.status(404).json({ message: e.message });
  }
}

export const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new PostMessage(post);
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch(e) {
    res.status(409).json({ message: e.message });
  }
}


export const updatePost = async (req, res) => {
  const { id : _id } = req.params;
  const post = req.body;

  if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("There is no post with that Id");

  const updatePost = await PostMessage.findByIdandUpdate(_id, post, { new: true});
  
  res.json(updatePost);
}