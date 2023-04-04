//update(edit todo and mark complete/not completed)
const mongoose = require("mongoose");

let userTodoSchema = new mongoose.Schema({
  username: String,
  todo: [
    {
      description: String,
      completed: Boolean,
    },
  ],
});
let todoUser = mongoose.model("todoUser", userTodoSchema);

const getTodos = async(req, res) => {
  const {_username} = req.params;
 
  const todos = await todoUser.findOne({ username: _username });

  res.status(200).json({todos})
}

const createTodo = async (req, res) => {
  const { username, description } = req.body;

  const newTodoUser = new todoUser({
    username: username,
    todo: [
      {
        description: description,
        completed: false,
      },
    ],
  });

  const userAvailable = await todoUser.findOne({username:username})

  if(userAvailable !== null) {
    await todoUser.findOneAndUpdate(
       { username: username },
       {
         $inc: {
           count: 1,
         },
         $push: {
           "todo": {
             description: description,
             completed: false
           },
         },
       },
       { new: true }
     );
  } else  {
    await newTodoUser.save();
  }
  
  res.status(200).json({ username: username, todo: description });
};

const deleteTodo = async(req, res) => {
  const { username, description, completion } = req.body;
   await todoUser.updateOne(
     { username: username },
     {
       $pull: {
         "todo": {
           description: description,
           completed: completion
         },
       },
     }
   );

   res.status(200).json({username: username, description: description, completed: completion})
} 

const updateTodo = async(req, res) => {
  const {username, description, newDescription, completion} = req.body

  await todoUser.updateOne(
    { username: username, "todo.description": description },
    { $set: { "todo.$.description": newDescription } }
  );

  res.status(200).json({username: username, description: newDescription, completed: completion});
}

module.exports = {createTodo, getTodos, deleteTodo};
