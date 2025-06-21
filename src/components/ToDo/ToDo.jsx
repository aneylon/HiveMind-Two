import { useState } from "react";
const startTodoItems = [
  { id: 1, title: "one", completed: false },
  { id: 2, title: "two", completed: true },
  { id: 3, title: "three", completed: false },
];
export const ToDo = () => {
  const [ToDoItems, SetToDoItems] = useState(startTodoItems);
  const [newItem, setNewItem] = useState("");
  const AddToDoItem = (event) => {
    event.preventDefault();
    if (newItem !== "") {
      SetToDoItems([
        ...ToDoItems,
        {
          id: ToDoItems.length + 1,
          title: newItem,
          completed: false,
        },
      ]);
      setNewItem("");
    }
  };
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
      <ul>
        {ToDoItems.map((item) => {
          return (
            <li
              key={item.id}
              onClick={() => {
                let temp = ToDoItems.slice();
                temp[item.id - 1].completed = !temp[item.id - 1].completed;
                SetToDoItems(temp);
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
    </>
  );
};
