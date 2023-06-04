const express = require("express");
const fs = require("fs");
const path = require("path");
const { posts } = require("../db-setup/posts");

const postsRouter = express.Router();

postsRouter.get("/", (req, res) => {
  try {
    res.status(200).send(posts);
  } catch {
    res.status(404).json({ message: "somthing is wrong at postrouter" });
  }
});
postsRouter.get("/:userId", (req, res) => {
  const userId = req.params.userId;
  const response = posts.filter((post) => post.userId === parseInt(userId));
  res.send(response[1].body);
});
postsRouter.put("/", (req, res) => {
  let demo;
  const { postId, body } = req.body;
  if (!postId || !body) {
    res.status(400).send("Missing Required Feilds");
  } else {
    const response = posts.filter((post) => {
      if (post.id === parseInt(postId)) {
        post.body = body;
        demo=post;
      }
      return post
    });

    fs.writeFileSync(
      path.resolve(__dirname, "../db-setup/posts.json"),
      JSON.stringify(response)
    );
    res.json(demo);
  }
});
postsRouter.get("/:userId/:postId", (req, res) => {});
postsRouter.put("/:userId/:postId", (req, res) => {});
postsRouter.delete("/:userId/:postId", (req, res) => {});

module.exports = { postsRouter };
