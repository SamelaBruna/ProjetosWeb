import { Trash2 } from "lucide-react";

function Tasks(props) {
  return (
    <ul className="space-y-4 bg-slate-200 p-6 rounded-md shadow">
      {props.tasks.map((task) => (
        <li key={task.id} className="flex gap-2 ">
          <button
            onClick={() => props.onTaskClick(task.id)}
            className={`bg-slate-400 w-full text-white p-2 rounded-md text-left ${
              task.isCompleted && "line-through"
            } `}
          >
            {task.title}
          </button>
          <button
            onClick={() => props.deleteTask(task.id)}
            className="bg-red-500 text-white p-2 rounded-md"
          >
            <Trash2 />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
