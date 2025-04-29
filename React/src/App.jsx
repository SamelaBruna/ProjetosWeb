import { useState } from "react";
import Tasks from "./components/Tasks";
import AddTasks from "./components/AddTasks";
function App() {
  // State
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar",
      description: "estudar react, SQL e etc",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Pagar conta",
      description: "Pagar aluguel, energia e etc",
      isCompleted: false,
    },

    {
      id: 3,
      title: "Imprimir documentos",
      description: "Imprimir muitos muitos documentos",
      isCompleted: false,
    },
  ]);

  return (
    //lembrando que nao posso retornar mais de um elemento
    <div className="w-screen h-screen bg-slate-700 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <Tasks tasks={tasks}></Tasks>
      </div>
    </div>
  );
}

export default App;
