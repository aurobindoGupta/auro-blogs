const express = require("express");

const usersRouter = express.Router();

usersRouter.get("/", (req, res) => {
    const userInput = req.body
});
usersRouter.post("/", (req, res) => {});
usersRouter.put("/:id", (req, res) => {});
usersRouter.delete("/:id", (req, res) => {});

module.exports = { usersRouter };
