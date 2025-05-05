const express = require('express');
const router = express.Router();
const UserController = require('../controller/user.controller');
const { body } = require(require('express-validator'));

router.post('/register'
    ,
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Email is required'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    UserController.registerUser
)


module.exports = router;