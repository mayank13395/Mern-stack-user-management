
import express from 'express';
import { validateLoginReq, validateRegisterReq } from '../../utils/user-validator';
import login from './login';
import registerUser from './register';
export const userRouters = express.Router();

const { check } = require('express-validator')
// user routes

// @route POST /register
// @desc  register user
// @access Public
userRouters.post('/register',
    validateRegisterReq,
    registerUser
)


// @route POST /login
// @desc  login user
// @access Public
userRouters.post('/login', validateLoginReq, login);

