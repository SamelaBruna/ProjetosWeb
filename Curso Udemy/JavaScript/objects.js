//function criarPessoa(n, s, i) {
//return {
//retorna um objeto
//nome: n,
//sobrenome: s,
//idade: i,
//};
//}

//const pessoa3 = criarPessoa("isaac", "ferreira", "36");
//const pessoa4 = criarPessoa("maria", "ferreira", "28");
//const pessoa5 = criarPessoa("sam", "fer", "40");

//console.log(pessoa1.nome, pessoa3.nome, pessoa4.nome, pessoa5.nome);

const pessoa1 = {
  nome: "samela",
  sobrenome: "ferreira",
  idade: 26,

  fala() {
    console.log(`${this.nome} ${this.sobrenome} esta dizendo oi`);
  }, //metodo

  incrementaIdade() {
    this.idade++;
  },
};

pessoa1.fala();
pessoa1.incrementaIdade();
console.log(pessoa1.idade);
