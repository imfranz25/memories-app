// 3rd Party Modules
import bcrypt from 'bcrypt';
import { validationResult } from 'express-validator';

// Models
import User from '../models/user.model.js';

const signUp = async (req, res, next) => {
  const errors = validationResult(req);
  const { password } = req.body;

  if (!errors.isEmpty) {
    return res.status(422).json({ message: 'Invalid Input', errors: errors.array() });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 12);

    if (!hashedPassword) {
      throw new Error('Something went wrong...');
    }

    const newUser = new User({ ...req.body, password: hashedPassword });
    const createdUser = await newUser.save();

    res.status(201).json(createdUser);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const signIn = async (req, res, next) => {
  const errors = validationResult(req);
  const { email, password } = req.body;

  try {
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export { signUp };
