import { SquarePlus } from "lucide-react";
import { useState } from "react";

function AddTasks(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  console.log(props);
  //console.log(title);
  return (
    <div className="bg-slate-200 p-6 rounded-md shadow gap-2 space-y-4">
      <input
        className="p-2 w-full rounded-md"
        type="text"
        placeholder="Digite sua tarefa"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <input
        className="p-2 w-full rounded-md"
        type="text"
        placeholder="Digite a descriçāo da tarefa"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            return alert("Digite sua tarefa para adiciona-la");
          }
          props.addTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg-green-500 text-white p-2 rounded-md w-full"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTasks;
