import express from "express";
import { getPosts, createPost } from "../controllers/post.js";

const router = express.Router();

// ROUTING CALLS
router.get('/', getPosts);
router.post('/', createPost);

export default router;