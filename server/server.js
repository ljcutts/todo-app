const express = require("express")
const mongoose = require("mongoose")
const {createTodo, getTodos, deleteTodo } = require("../server/controllers/controller")
const cors = require("cors")
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
require("dotenv").config({ path: ".env" });

mongoose.connect(
  "",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.get("/api/users/:_username", getTodos)

app.post("/api/todo", createTodo)

app.delete("/api", deleteTodo)


  app.listen(5000, () =>
      console.log(`Server Running on Port: http://localhost:5000`)
    )
