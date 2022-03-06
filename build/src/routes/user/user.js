"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouters = void 0;
const express_1 = __importDefault(require("express"));
const user_validator_1 = require("../../utils/user-validator");
const login_1 = __importDefault(require("./login"));
const register_1 = __importDefault(require("./register"));
exports.userRouters = express_1.default.Router();
const { check } = require('express-validator');
// user routes
// @route POST /register
// @desc  register user
// @access Public
exports.userRouters.post('/register', user_validator_1.validateRegisterReq, register_1.default);
// @route POST /login
// @desc  login user
// @access Public
exports.userRouters.post('/login', user_validator_1.validateLoginReq, login_1.default);
//# sourceMappingURL=user.js.map