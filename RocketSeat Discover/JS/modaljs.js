const modalElement = document.querySelector(".modal-wrapper");
const buttonModal = document.getElementById("openModal");

buttonModal.addEventListener("click", function () {
  modalElement.classList.remove("invisible");
});

document.addEventListener("keydown", function (event) {
  const isESC = event.key === "Escape";
  if (isESC && !modalElement.classList.contains("invisible")) {
    modalElement.classList.add("invisible");
  }
});
