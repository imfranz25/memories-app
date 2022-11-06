import bcrypt from 'bcrypt';

import User from '../models/user';

const createUser = async (req, res, next) => {
  const { email, password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    return res.status(422).json({ message: 'Password and Confirm Password does not match!' });
  }

  try {
    const isUserExist = await User.findOne({ email: email });

    if (isUserExist) {
      return res.status(422).json({ message: 'Email already taken, please try again...' });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    if (hashedPassword) {
      return res.status(409).json({ message: 'Something went wrong, please try again...' });
    }

    const newUser = new User({ ...req.body, password: hashedPassword });
    const createdUser = await newUser.save();

    res.status(201).json(createdUser);
  } catch (error) {
    next(error);
  }
};
