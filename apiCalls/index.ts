import axios from "axios"

export interface OneToDo {
    username: string
    description: string
    completed: boolean
}

export const createTodo = (newTodo: OneToDo) => axios.post("http://localhost:5000/api/todo", newTodo);
export const getTodos = (username: string) => axios.get(`http://localhost:5000/api/users/${username}`);
export const deleteTodo = (username: string, description: string, completed: string) =>
  axios.delete("http://localhost:5000/api/", {
    data: {
      username: username,
      description: description,
      completed: completed
    },
  });
export const updateTodo = (
  username: string,
  description: string,
  newDescription: string,
  completed: boolean
) => axios.patch(`http://localhost:5000/api/todo/${username}/${description}`, {
    completed: completed,
    newDescription: newDescription
  });
  export const updateCompletion = (
    username: string,
    description: string,
    completed: string
  ) => axios.patch(`http://localhost:5000/api/todo/${username}/${description}/${completed}`);