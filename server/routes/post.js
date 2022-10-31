import express from 'express';

const router = express.Router();

// Controllers
import {
  getPosts,
  createPost,
  deletePost,
  updatePost,
  likePost,
} from '../controllers/post.controller.js';

router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:postId', updatePost);
router.patch('/like/:postId', likePost);
router.delete('/:postId', deletePost);

export default router;
