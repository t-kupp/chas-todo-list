import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";

export default function TodoItem({ obj, toggleDone }) {
  return (
    <div className="flex items-center gap-4 rounded border px-4 py-2">
      <p className={obj.done ? "line-through" : ""}>{obj.title}</p>
      <button className="{} ml-auto" onClick={() => toggleDone(obj.id)}>
        {obj.done ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
      </button>
    </div>
  );
}
