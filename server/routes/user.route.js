import express from 'express';
import { userSignUpValidator } from '../validators/user.validator.js';

const router = express.Router();

// Controllers
import { signUp } from '../controllers/user.controller.js';

router.post('/signup', userSignUpValidator, signUp);

export default router;
