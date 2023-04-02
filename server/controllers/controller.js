import express from "express";
import mongoose from "mongoose";
import { todoUser, todoUser } from "../models/model";

const router = express.Router();

export const createTodo = async(req,res) => {
  const {username, description} = req.body;

  let newTodoUser = new todoUser({
    username: username,
    todo: [
        {
            description: description,
            completed: false
        }
    ]
  })

   todoUser.findOne({username: username}, (err, data) => {
    if(err) return err
     if(!data) {
        newTodoUser.save((err, data) => {
           if(err) return err
           res.send({username: username, todo: description})
        })
     } else {
         User.findOneAndUpdate({username: username}, {$inc: {
        count: 1
    }, $push: {
      "logs": {
          description: description,
          completed: false
      }
  }}, {new: true}, (err, data) => {
     res.send({ username: username, todo: description});
  })
     }
   })
}


export default router