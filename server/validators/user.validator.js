import { body } from 'express-validator';

const userSignUpValidator = [
  body('email')
    .trim()
    .isEmail()
    .withMessage('Invalid Email. please try again')
    .normalizeEmail({ gmail_remove_dots: false })
    .isLength({ max: 50 })
    .withMessage('Invalid email length, please try again...')
    .custom(async (value, { _req }) => {
      try {
        const isUserExist = await User.findOne({ email: value });

        // return false if user exist, true if email is not yet taken
        return !isUserExist;
      } catch (error) {
        return false;
      }
    })
    .withMessage('Email already taken, please try again...'),
  body('firstName')
    .trim()
    .not()
    .isEmpty()
    .withMessage('First name is required!')
    .isLength({ max: 50 })
    .withMessage('Invalid name length'),
  body('lastName')
    .trim()
    .not()
    .isEmpty()
    .withMessage('Last name is required!')
    .isLength({ max: 50 })
    .withMessage('Invalid name length'),
  body('password').trim().isStrongPassword().withMessage('Password is weak'),
  body('confirmPassword')
    .trim()
    .custom((value, { req }) => {
      if (value !== req.password) {
        return false;
      }

      return true;
    })
    .withMessage('Password and confirm password doest not match'),
];

const userSignInValidator = [
  body('email')
    .trim()
    .isEmail()
    .withMessage('Input a valid email')
    .normalizeEmail({ gmail_remove_dots: false }),
  body('password').trim().not().isEmpty().withMessage('Password is required'),
];

export { userSignUpValidator, userSignInValidator };
