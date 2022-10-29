import express from 'express';

const router = express.Router();

// Controllers
import { getPosts } from '../controllers/index.js';

router.get('/', getPosts);

export default router;
