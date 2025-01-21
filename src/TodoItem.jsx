import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdDeleteForever,
} from "react-icons/md";

export default function TodoItem({ obj, toggleDone, handleDelete }) {
  return (
    <div className="flex max-w-full items-center gap-4">
      <button
        className="flex w-full items-center overflow-hidden rounded border px-4 py-2"
        onClick={() => toggleDone(obj.id)}
      >
        <p className={`${obj.done ? "line-through" : ""} truncate`}>
          {obj.title}
        </p>
        <span className="ml-auto pl-2">
          {obj.done ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        </span>
      </button>
      <button
        onClick={() => handleDelete(obj.id)}
        className="rounded bg-inherit p-[10px] text-red-500"
      >
        <MdDeleteForever size={20} />
      </button>
    </div>
  );
}
