import { body, validationResult } from 'express-validator';

// Validation middleware
const userValidation = [
  body('username')
    .exists({ checkFalsy: true })
    .withMessage('Username is required')
    .isString()
    .isLength({ min: 3, max: 25 })
    .withMessage('Username must be between 3-25 characters'),
  
  body('password')
    .exists({ checkFalsy: true })
    .withMessage('Password is required')
    .isString()
    .isLength({ min: 3 })
    .withMessage('Password must be at least 3 characters long')
];

const tokenValidation = [
  header('token')
    .exists({ checkFalsy: true })
    .withMessage('token is required')
    .isString()
    .withMessage('token is invalid type'),
]