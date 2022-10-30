const getPosts = (req, res, next) => {
  res.send('this is a post');
};

const createPost = (req, res, next) => {
  res.send('this is a create post');
};

export { getPosts, createPost };
