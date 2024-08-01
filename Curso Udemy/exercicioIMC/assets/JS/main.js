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

  if (peso.value < 0 || altura.value < 0 || !peso.value || !altura.value) {
    displayResult("Valor invalido");
    return; /*esse return ira fazer o codigo parar aqui caso o if seja verdade*/
  }

  const imc = getIMC(Number(peso.value), Number(altura.value));
  getLevelIMC(imc);

  const level = getLevelIMC(imc);
  displayResult(`Seu IMC é: ${imc}, ${level}.`);
}

function getIMC(p, a) {
  const imc = p / a ** 2;
  return imc.toFixed(2);
}

function getLevelIMC(imcResult) {
  const levels = [
    "Abaixo do peso",
    "Peso normal",
    "Sobrepeso",
    "Obesidade grau 1",
    "Obesidade grau 2",
    "Obesidade grau 3",
  ];
  if (imcResult <= 18.5) {
    return levels[0];
  } else if (imcResult >= 18.6 && imcResult <= 24.9) {
    return levels[1];
  } else if (imcResult >= 25 && imcResult <= 29.9) {
    return levels[2];
  } else if (imcResult >= 30 && imcResult <= 34.9) {
    return levels[3];
  } else if (imcResult >= 35 && imcResult <= 39.9) {
    return levels[4];
  } else if (imcResult >= 40) {
    return levels[5];
  }
}

function createP() {
  const p = document.createElement("p");
  return p;
}

function displayResult(msg) {
  const result = document.querySelector("#resultado");
  result.innerHTML = "";
  const p = createP();
  p.classList.add("paragrafo-resultado"); /*Adicionando a classe no elemento p*/
  p.innerHTML = msg;
  result.appendChild(
    p
  ); /*Insere um elemento filho(no caso o p) no elemento resultado*/
}

form.addEventListener("submit", calcularIMC);
