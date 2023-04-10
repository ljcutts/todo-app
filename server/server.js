require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const {
  createTodo,
  getTodos,
  deleteTodo,
  updateTodo,
  updateCompletion,
} = require("../server/controllers/controller");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

mongoose.connect(
  ``,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.get("/api/users/:_username", getTodos);

app.post("/api/todo", createTodo);

app.patch("/api/todo/:_username/:_description", updateTodo);

app.patch("/api/todo/:_username/:_description/:_completed", updateCompletion);

app.delete("/api", deleteTodo);

app.listen(5000, () =>
  console.log(`Server Running on Port: http://localhost:5000`)
);
