const express = require("express");
const { posts } = require("../db-setup/posts");

const postsRouter = express.Router();

postsRouter.get("/", (req, res) => {
  res.status(200).send(posts);
});
postsRouter.get("/:userId", (req, res) => {
  const userId = req.params.userId;
  const response = posts.filter((post) => post.userId === parseInt(userId));
  res.send(response);
});
postsRouter.post("/:userId", (req, res) => {});
postsRouter.get("/:userId/:postId", (req, res) => {});
postsRouter.put("/:userId/:postId", (req, res) => {});
postsRouter.delete("/:userId/:postId", (req, res) => {});

module.exports = { postsRouter };
