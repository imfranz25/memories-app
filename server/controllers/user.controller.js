// 3rd Party Modules
import bcrypt from 'bcrypt';

// Models
import User from '../models/user.model.js';

const createUser = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const isUserExist = await User.findOne({ email: email });

    if (isUserExist) {
      return res.status(422).json({ message: 'Email already taken, please try again...' });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    if (!hashedPassword) {
      throw new Error('Something went wrong...');
    }

    const newUser = new User({ ...req.body, password: hashedPassword });
    const createdUser = await newUser.save();

    res.status(201).json(createdUser);
  } catch (error) {
    next(error);
  }
};

export { createUser };
