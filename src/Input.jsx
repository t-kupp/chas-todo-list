import { MdAdd } from "react-icons/md";

export default function Input({ handleChange, handleClick, setTodoTitle }) {
  return (
    <div className="mb-4 flex w-full gap-4">
      <input
        onChange={handleChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleClick();
            setTodoTitle("");
            e.target.value = "";
          }
        }}
        className="w-full rounded border p-2"
        type="text"
        name="addTodoItem"
        id="addTodoItem"
        placeholder="Add something to do..."
      />
      <button onClick={handleClick} className="ml-auto rounded p-2 px-3">
        <MdAdd />
      </button>
    </div>
  );
}
