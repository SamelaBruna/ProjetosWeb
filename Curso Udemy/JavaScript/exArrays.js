function meuEscopo() {
  const form = document.querySelector(".form");
  const resultado = document.querySelector(".resultado");
  const pessoas = [];
  /*form.onsubmit = function (evento) {
    evento.preventDefault(); //previne o que deveria acontecer por padrao, n envia o form
    alert(1);
    console.log("foi enviado");
  };*/
  function recebeEventoForm(evento) {
    evento.preventDefault();
    //console.log("form n foi enviado");
    const nome = form.querySelector(".nome");
    const sobrenome = form.querySelector(".sobrenome");
    const peso = form.querySelector(".peso");
    const altura = form.querySelector(".altura");

    pessoas.push({
      nome: nome.value,
      sobrenome: sobrenome.value,
      peso: peso.value,
      altura: altura.value,
    });
    console.log(pessoas);
    resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value}kg ${altura.value}m </p>`;
  }
  form.addEventListener("submit", recebeEventoForm);
}

meuEscopo();
