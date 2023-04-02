import mongoose from "mongoose";

let userTodoSchema = new mongoose.Schema({
  username: String,
  todo: [
    {
      description: String,
      completed: Boolean,
    },
  ],
});
export const todoUser = mongoose.model("todoUser", userTodoSchema);
