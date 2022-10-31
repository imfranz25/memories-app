import express from 'express';

const router = express.Router();

// Controllers
import { getPosts, createPost, deletePost } from '../controllers/post.controller.js';

router.get('/', getPosts);
router.post('/', createPost);
router.delete('/:postId', deletePost);

export default router;
