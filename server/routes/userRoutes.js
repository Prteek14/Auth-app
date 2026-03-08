const loginController = require("../controllers/loginController");
const signupController = require("../controllers/signupController");

const express = require("express");
const userRouter = express.Router();

userRouter.post("/users/login", loginController);
userRouter.post("/users/signup", signupController);

module.exports = userRouter;
