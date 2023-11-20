const express = require('express')

const userRouter = express.Router();
const {handleSignup, handleLogin} = require('../controllers/user.js')



userRouter.post("/signup",handleSignup)

userRouter.post("/login", handleLogin)
module.exports = userRouter