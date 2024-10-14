const { Router } = require("express");
const UserUseCase = require("../../use-cases/UserUseCase.js");
const UserController = require("../controllers/UserController.js");
const UserRepository = require("../repositories/UserRepository.js");

const userRepository = new UserRepository();
const userUseCase = new UserUseCase(userRepository);
const userController = new UserController(userUseCase);

const route = Router();

route
    .post("/user", (req, res, next) => userController.createUser(req, res, next))
    .get("/user", (req, res, next) => userController.getAll(req, res, next))
    .get("/user/:id", (req, res, next) => userController.getById(req, res, next))
    .put("/user/:id", (req, res, next) => userController.updateById(req, res, next))
    .delete("/user/:id", (req, res, next) => userController.deleteById(req, res, next));

module.exports = route;