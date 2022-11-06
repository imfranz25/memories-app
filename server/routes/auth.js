import express from 'express';

const router = express.Router();

// Controllers
import { createUser } from '../controllers/auth.controller.js';

router.post('/', createUser);

export default router;
