const { body, validationResult } = require('express-validator');


exports.userValidationRules = () => {
    return [
        body('name')
            .isLength({ min: 2, max: 100 })
            .withMessage('Name must be between 2 and 100 characters'),

        body('email')
            .isEmail()
            .withMessage('Please provide a valid email')
            .normalizeEmail(),

        body('password')
            .isLength({ min: 6 })
            .withMessage('Password must be at least 6 characters long')
    ]
}


exports.validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) return next();
  console.log(errors);
  

  const extractedErrors = errors.array().map(err => ({
    [err.path]: err.msg
  }));

  return res.status(422).json({
    success: false,
    message: 'Validation failed',
    errors: extractedErrors
  });
};