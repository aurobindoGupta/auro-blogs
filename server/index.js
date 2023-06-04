require("dotenv").config();
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");

const { adminRouter } = require("./router/adminRouter");
const { usersRouter } = require("./router/userRouter");
const { postsRouter } = require("./router/postsRouter");

const app = express();

app.use(bodyParser.json());
app.use(
  cors({
    origin: "*",
  })
);
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   next();
// });

app.get("/", (req, res) => {
  res.send("BACKEND CREATED");
});

app.use("/admin", adminRouter);
app.use("/users", usersRouter);
app.use("/api/posts", postsRouter);

app.listen(3001, "192.168.1.4", () => {
  console.log("server Started at 3001");
});
