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

  function onTaskClick(taskId) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }

      return task;
    });
    setTasks(updatedTasks);
  }

  function deleteTask(taskId) {
    //filtrando, o novo array de tarefas ira conter apenas as tarefas que tem o id diferente da que eu estou querendo deletar
    const filteredTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(filteredTasks);
  }

  function addTaskSubmit(title) {
    const newTask = {
      id: tasks.length + 1,
      title: title,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    //lembrando que nao posso retornar mais de um elemento
    <div className="w-screen h-screen bg-slate-700 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTasks addTaskSubmit={addTaskSubmit}> </AddTasks>
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          deleteTask={deleteTask}
        ></Tasks>
      </div>
    </div>
  );
}

export default App;
