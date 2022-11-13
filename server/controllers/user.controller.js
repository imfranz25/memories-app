// 3rd Party Modules
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { validationResult } from 'express-validator';

// Models
import User from '../models/user.model.js';

const signUp = async (req, res) => {
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
    res.send(500).json({ error: error });
  }
};

const signIn = async (req, res) => {
  const errors = validationResult(req);
  const { email, password } = req.body;
  const JWT_SECRET = process.env.JWT_SECRET;

  if (!errors.isEmpty) {
    return res.status(422).json({ message: 'Invalid Input', errors: errors.array() });
  }

  try {
    const existingUser = await User.findOne({ email: email });

    if (!existingUser) {
      return res.status(404).json({ message: 'Invalid email or password...' });
    }

    const isPasswordMatched = await bcrypt.compare(password, existingUser?.password);

    if (!isPasswordMatched) {
      return res.status(401).json({ message: 'Invalid email or password...' });
    }

    const token = jwt.sign(
      {
        userId: existingUser._id.toString(),
        email: existingUser.email,
      },
      JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.status(200).json({ message: 'Logged in success', token: token });
  } catch (error) {
    res.send(500).json({ error: error });
  }
};

export { signUp, signIn };
