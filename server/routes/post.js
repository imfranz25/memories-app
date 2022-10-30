import express from 'express';

const router = express.Router();

// Controllers
import { getPosts, createPost } from '../controllers/post.controller.js';

router.get('/', getPosts);
router.post('/', createPost);

export default router;
