export default function Input({ handleChange, handleClick, setTodoTitle }) {
  return (
    <div className="mb-4 flex w-full max-w-[518px] gap-4">
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
      <button
        onClick={handleClick}
        className="ml-auto text-nowrap rounded px-4 text-sm font-bold"
      >
        Add Task
      </button>
    </div>
  );
}
