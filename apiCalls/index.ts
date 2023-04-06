import axios from "axios"

interface OneToDo {
    username: string
    description: string
}

export const createTodo = (newTodo: OneToDo) => axios.post("http://localhost:5000/api/todo", newTodo);
export const getTodos = (username: string) => axios.get(`http://localhost:5000/api/users/${username}`);
export const deleteTodo = () => axios.delete("http://localhost:5000/api/");
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
    completed: boolean
  ) => axios.patch(`http://localhost:5000/api/todo/${username}/${description}/${completed}`);