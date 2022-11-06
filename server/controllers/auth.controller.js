import User from '../models/user';

const createUser = async (req, res, next) => {
  const { email } = req.body;

  try {
    const isUserExist = User.findOne({ email: email });

    if (isUserExist) {
      return res.status(422).json({ message: 'Email already taken, please try again...' });
    }

    const newUser = new User(req.body);
    const createdUser = newUser.save();

    res.status(201).json(createdUser);
  } catch (error) {
    next(error);
  }
};
