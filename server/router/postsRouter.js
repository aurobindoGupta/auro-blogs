const express = require("express");
const fs = require("fs");
const path = require("path");
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
postsRouter.post("/", (req, res) => {
  const { userId, title, body } = req.body;
  if (!userId || !title || !body) {
    res.status(400).send("Missing Required Feilds");
  } else {
    const newPost = {
      userId,
      title,
      body,
      id: posts.length + 1,
    };
    posts.push(newPost);

    fs.writeFileSync(
      path.resolve(__dirname, "../db-setup/posts.json"),
      JSON.stringify(posts)
    );
    res.json(newPost);
  }
});
postsRouter.get("/:userId/:postId", (req, res) => {});
postsRouter.put("/:userId/:postId", (req, res) => {});
postsRouter.delete("/:userId/:postId", (req, res) => {});

module.exports = { postsRouter };
