const express = require("express"),
  todoRoute = express.Router(),
  todoControllers = require("../controllers/todo_controller");

todoRoute.get("/api/health", function(req, res, next) {
  res.send({ message: "API is Alive and kickin'" });
});

//  Todos Route
todoRoute.post("/api/todo/create", todoControllers.create);
todoRoute.get("/api/todo/:id", todoControllers.view);
todoRoute.put("/api/todo/:id", todoControllers.update);
todoRoute.delete("/api/todo/:id", todoControllers.delete);

module.exports = todoRoute;
