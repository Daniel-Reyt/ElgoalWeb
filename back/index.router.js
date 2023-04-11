const express = require("express");
const indexRouter = express.Router();
const userController = require('./users/user.controller');

indexRouter.get("/users", userController.getUser);

module.exports = indexRouter;