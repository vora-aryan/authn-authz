const express = require(`express`);
const { login, signup } = require("../controllers/userController");
const userRouter = express.Router();

userRouter.get("/login", login);

userRouter.get("/signup", signup);

module.exports = userRouter;
