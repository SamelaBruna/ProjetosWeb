const form = document.querySelector("#form");

/*form.addEventListener("submit", function (e) {
  e.preventDefault();
  peso = form.querySelector("#input-peso");
  console.log(peso.value);
});*/

function calcularIMC(evento) {
  evento.preventDefault();
  peso = form.querySelector("#input-peso");
  altura = form.querySelector("#input-altura");
  resultado = peso.value / altura.value ** 2;
  console.log(resultado.toFixed(2));
}

function displayResult() {}

form.addEventListener("submit", calcularIMC);
