import { useEffect, useState } from "react";
import { AddTodo, GetTodos, UpdateTodo } from "../../API/TodoApi";

export const ToDo = () => {
  const url = "http://localhost:3000";

  const [ToDoItems, SetToDoItems] = useState(null);
  const [newItem, setNewItem] = useState("");

  const getToDos = () => {
    GetTodos()
      .then((todos) => SetToDoItems(todos))
      .catch((error) => console.error(error));
  };

  const addTodo = (todo) => {
    AddTodo(todo)
      .then((res) => {
        getToDos();
      })
      .catch((error) => console.error(error));
  };

  const updateToDo = (id, completed) => {
    UpdateTodo(id, completed)
      .then((res) => {
        console.log(res);
        getToDos();
      })
      .catch((error) => console.error(error));
  };

  const AddToDoItem = (event) => {
    event.preventDefault();

    if (newItem !== "") {
      addTodo({
        id: ToDoItems.length + 1, // TODO : server should set id
        title: newItem,
        completed: false,
        user: 2,
      });
      setNewItem("");
    }
  };
  useEffect(() => {
    getToDos();
  }, []);
  return (
    <>
      <h1>TO DO:</h1>
      <form onSubmit={AddToDoItem}>
        <input
          name="newItem"
          id="newItem"
          type="text"
          placeholder="new item"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button type="submit">Add Item</button>
      </form>
      {ToDoItems && (
        <ul>
          {ToDoItems.map((item) => {
            return (
              <li
                key={item.id}
                onClick={() => {
                  updateToDo(item.id, !item.completed);
                }}
              >
                <p
                  style={{
                    textDecoration: item.completed ? "line-through" : "none",
                  }}
                >
                  {item.title}
                </p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};
