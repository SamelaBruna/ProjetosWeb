const inputTask = document.querySelector(".input-new-task");
const btnTask = document.querySelector(".btn-add-task");
const taskList = document.querySelector(".tasksList");

function createLi() {
  const li = document.createElement("li");
  return li;
}

function cleanInput() {
  inputTask.value = "";
  inputTask.focus();
}

function createButtonRemove(li) {
  const btnRemove = document.createElement("button");
  btnRemove.innerHTML = "Delete";
  btnRemove.setAttribute("class", "delete");
  li.appendChild(btnRemove);
}

function createTask(text) {
  const li = createLi();
  li.innerText = text + " ";
  taskList.appendChild(li);
  cleanInput();
  createButtonRemove(li);
  saveTasks();
}

inputTask.addEventListener("keypress", function (e) {
  if (e.keyCode === 13) {
    if (!inputTask.value) return;
    createTask(inputTask.value);
  }
});

btnTask.addEventListener("click", function (e) {
  if (!inputTask.value) return;
  createTask(inputTask.value);
});

document.addEventListener("click", function (e) {
  const element = e.target;
  if (element.classList.contains("delete")) {
    element.parentElement.remove(); //o pai do meu elemento sera removido
    saveTasks();
  }
});

function saveTasks() {
  const liTasks = taskList.querySelectorAll("li");
  const tasksListArray = [];
  for (let tasks of liTasks) {
    let taskText = tasks.innerText;
    taskText = taskText.replace("Delete", "").trim();
    tasksListArray.push(taskText);
  }
  const tasksJSON = JSON.stringify(tasksListArray);
  localStorage.setItem("tasksKey", tasksJSON); //o nome que vai usar pra recuperar e so pode salvar strings
}

function addSavedTasks() {
  const tasksLocal = localStorage.getItem("tasksKey"); //string
  const tasksListfromLocal = JSON.parse(tasksLocal); //parse converte de volta pra um objeto JS, agora voltou ser um array
  for (let tasks of tasksListfromLocal) {
    createTask(tasks);
  }
}

addSavedTasks();
