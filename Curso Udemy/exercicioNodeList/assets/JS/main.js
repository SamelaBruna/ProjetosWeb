const divParagraph = document.querySelector(".paragraph"); //so retorna o primeiro elemento que ele encontrar
const ps = document.querySelectorAll("p");
const bodyStyles = getComputedStyle(document.body);
const bodyColor = bodyStyles.backgroundColor;

for (let p of ps) {
  p.style.backgroundColor = bodyColor;
  p.style.color = "white";
}
