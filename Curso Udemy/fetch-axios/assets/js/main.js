// fetch("pessoas.json") //buscando os dados no json
//   .then((response) => response.json()) //convertendo a resposta em formato json
//   .then((json) => loadPessoas(json)); //passando o json como parametro da func loadPessoas

//COM AXIOS:

axios("pessoas.json").then((response) => loadPessoas(response.data));

function loadPessoas(json) {
  const table = document.createElement("table");
  for (let pessoas of json) {
    //pra cada elemento pessoa do json
    const tr = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.innerHTML = pessoas.nome;
    tr.appendChild(td1);

    let td2 = document.createElement("td");
    td2.innerHTML = pessoas.idade;
    tr.appendChild(td2);

    let td3 = document.createElement("td");
    td3.innerHTML = pessoas.salario;
    tr.appendChild(td3);

    table.appendChild(tr);
  }

  const result = document.querySelector(".resultado");
  result.appendChild(table);
}
