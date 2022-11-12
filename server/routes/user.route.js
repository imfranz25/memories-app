import express from 'express';
import { userSignUpValidator } from '../validators/user.validator.js';

const router = express.Router();

// Controllers
import { createUser } from '../controllers/user.controller.js';

router.post('/signup', userSignUpValidator, createUser);

export default router;
