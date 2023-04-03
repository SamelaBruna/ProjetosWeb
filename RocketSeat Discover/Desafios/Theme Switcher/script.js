const checkbox = document.getElementById("check");
const bodyBgClass = document.querySelector("body");

checkbox.addEventListener("click", toggleSwitch);

function toggleSwitch() {
  if (checkbox.checked == true) {
    bodyBgClass.classList.remove("bg-[#F1F1F1]");
    bodyBgClass.classList.add("bg-[#292C35]");
  } else {
    bodyBgClass.classList.remove("bg-[#292C35]");
    bodyBgClass.classList.add("bg-[#F1F1F1]");
  }
}
