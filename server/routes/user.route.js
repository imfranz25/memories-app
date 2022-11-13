import express from 'express';
import { userSignUpValidator, userSignInValidator } from '../validators/user.validator.js';

const router = express.Router();

// Controllers
import { signUp, signIn } from '../controllers/user.controller.js';

router.post('/signup', userSignUpValidator, signUp);
router.post('/signin', userSignInValidator, signIn);

export default router;
