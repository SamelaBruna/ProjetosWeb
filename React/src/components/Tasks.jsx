import { Trash2, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Tasks(props) {
  const navigate = useNavigate();

  function seeDetails(task) {
    navigate(`/task?title=${task.title}&description=${task.description}`);
  }

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
            onClick={() => seeDetails(task)}
            className="bg-blue-400 text-white p-2 rounded-md"
          >
            {" "}
            <ChevronRight />
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
