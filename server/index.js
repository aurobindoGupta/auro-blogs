require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const { adminRouter } = require("./router/adminRouter");
const { usersRouter } = require("./router/userRouter");
const { postsRouter } = require("./router/postsRouter");

const app = express();

app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("BACKEND CREATED");
});

app.use("/admin", adminRouter);
app.use("/users", usersRouter);
app.use("/posts", postsRouter);

app.listen(3001, () => {
  console.log("server Started at 3001");
});
