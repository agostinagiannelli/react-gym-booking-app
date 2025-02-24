"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var usersController_1 = require("../controllers/usersController");
var validateUser_1 = require("../middlewares/validateUser");
var usersRouter = (0, express_1.Router)();
usersRouter.get("/", usersController_1.getUsers);
usersRouter.get("/:id", usersController_1.getUserById);
usersRouter.post("/register", validateUser_1.validateUser, usersController_1.registerUser);
usersRouter.post("/login", usersController_1.loginUser);
exports.default = usersRouter;
