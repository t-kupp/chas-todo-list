import { useState } from "react";
import "./App.css";
import TodoItem from "./TodoItem";
import Input from "./Input";

function App() {
  const [data, setData] = useState([]);

  const [todoTitle, setTodoTitle] = useState("");

  function handleClick() {
    if (todoTitle.trim() === "") return;
    const newTodoItem = { id: Date.now(), title: todoTitle, done: false };
    setData([...data, newTodoItem]);
  }

  function handleChange(e) {
    setTodoTitle(e.target.value);
  }

  function toggleDone(id) {
    const updatedData = data.map((item) => {
      return item.id === id ? { ...item, done: !item.done } : item;
    });
    setData(updatedData);
  }

  function handleDelete(id) {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
  }

  return (
    <div className="mx-auto h-screen w-full max-w-xl">
      <h1 className="mb-20">To-Do List</h1>
      <div className="flex w-full flex-col gap-4">
        <Input
          handleChange={handleChange}
          handleClick={handleClick}
          setTodoTitle={setTodoTitle}
        />
        {data.map(function (obj) {
          return (
            <TodoItem
              key={obj.id}
              obj={obj}
              toggleDone={toggleDone}
              handleDelete={handleDelete}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
