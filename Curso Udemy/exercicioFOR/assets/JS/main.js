const elements = [
  { tag: "p", texto: "frase 1" },
  { tag: "div", texto: "frase 2" },
  { tag: "footer", texto: "frase 3" },
  { tag: "section", texto: "frase 4" },
];

const container = document.querySelector(".container");
const div = document.createElement("div");

for (let i = 0; i < elements.length; i++) {
  let { tag, texto } = elements[i];
  let elemento = document.createElement(tag);
  elemento.innerText = texto;
  div.appendChild(elemento);
}

container.appendChild(div);
