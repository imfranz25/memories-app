import express from 'express';

const router = express.Router();

// Controllers
import { createUser } from '../controllers/auth.controller.js';

router.post('/register', createUser);

export default router;
