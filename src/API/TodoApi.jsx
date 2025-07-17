import { handleError, handleResponse, request } from "./Utils";

const url = "http://localhost:3000/todo";

export const GetTodos = () => {
  return request("GET", url).then(handleResponse).catch(handleError);
};

export const AddTodo = (todo) => {
  return request("POST", url, todo).then(handleResponse).catch(handleError);
};

export const UpdateTodo = (id, completed) => {
  console.log(id, completed);
  return request("PATCH", `${url}/${id}`, { completed })
    .then(handleResponse)
    .catch(handleError);
};
