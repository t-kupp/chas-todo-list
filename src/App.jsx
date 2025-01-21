import { useState } from "react";
import "./App.css";
import TodoItem from "./TodoItem";

function App() {
  const [data, setData] = useState([]);

  const [todoTitle, setTodoTitle] = useState("");

  function handleClick() {
    if (todoTitle === "") return;
    const newTodoItem = { id: data.length, title: todoTitle, done: false };
    setData([...data, newTodoItem]);
  }

  function handleChange(e) {
    setTodoTitle(e.target.value);
  }

  function toggleDone(id) {
    let newArray = [...data];
    if (data[id].done) {
      newArray[id].done = false;
    } else {
      newArray[id].done = true;
    }
    setData(newArray);
  }

  // const inputField = document.getElementById(addTodoItem);
  // document.body.addEventListener("keydown", (e) => {
  //   if (e.key === "Enter") {
  //     setTodoTitle(inputField.value);
  //     inputField.innerText = "";
  //   }
  // });

  return (
    <div className="">
      <h1 className="mb-20">ToDo List</h1>

      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <input
            onChange={handleChange}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleClick();
                setTodoTitle("");
                e.target.value = "";
              }
            }}
            className="rounded border p-2"
            type="text"
            name="addTodoItem"
            id="addTodoItem"
            placeholder="Add something to do..."
          />
          <button onClick={handleClick} className="p-2">
            Add
          </button>
        </div>
        {data.map(function (obj) {
          return <TodoItem key={obj.id} obj={obj} toggleDone={toggleDone} />;
        })}
      </div>
    </div>
  );
}

export default App;
