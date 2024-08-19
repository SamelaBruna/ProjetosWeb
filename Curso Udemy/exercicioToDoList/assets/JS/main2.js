const inputTask = document.querySelector(".input-new-task");
const btnAdd = document.querySelector(".btn-add-task");
const ulTasks = document.querySelector(".tasksList");

function createLi() {
  const li = document.createElement("li");
  return li;
}

function createTask(text) {
  const itemList = createLi();
  itemList.innerHTML = text + " ";
  ulTasks.appendChild(itemList);
  createBtnRemove(itemList);
  createCheckBox(itemList);
  cleanInput();
}

function createBtnRemove(li) {
  const btnDelete = document.createElement("button");
  btnDelete.innerHTML = "Delete";
  btnDelete.setAttribute("class", "delete");
  li.appendChild(btnDelete);
}

function createCheckBox(li) {
  let chkBox = document.createElement("input");
  chkBox.setAttribute("type", "checkbox");
  chkBox.setAttribute("class", "checkBox");
  li.appendChild(chkBox);
}

function cleanInput() {
  inputTask.value = "";
}

btnAdd.addEventListener("click", function (e) {
  if (inputTask.value != "") {
    createTask(inputTask.value);
  }
  return;
});

inputTask.addEventListener("keypress", function (e) {
  if (e.keyCode === 13) {
    if (inputTask.value != "") {
      createTask(inputTask.value);
    }
    return;
  }
});

function saveTasks() {
  const arrayTasks = [];
  const allItemsList = document.querySelectorAll("li");
}

document.addEventListener("click", function (e) {
  const element = e.target; //botao
  if (element.classList.contains("delete")) {
    element.parentElement.remove(); //eliminando o elemento pai do botao, no caso o li
  }
});

document.addEventListener("change", function (e) {
  const element = e.target;
  if (element.checked) {
    element.parentElement.classList.add("done");
    console.log(element.parentElement);
  } else {
    element.parentElement.classList.remove("done");
  }
});
