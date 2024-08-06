const pessoa = {
  firstName: "Samela",
  surname: "Ferreira",
  age: "26",
  address: {
    street: "Rua dos alfeneiros",
    number: 4,
  },
}; //objeto
//const name = pessoa.name; //atribuicao normal
//console.log(name);
const { firstName, surname, age: idade } = pessoa; //atribuicao via desestruturacao, extrai do objeto pessoa a chave name e ja cria uma variavel com o name dessa chave que neesse caso eh name tb
console.log(firstName, (middleName = "") /*valor padrao*/, surname, idade);
const {
  address: { street, number },
  address: objectAddress,
} = pessoa;
console.log(street, number, objectAddress);

//objeto

//age: idade  nome da chave : nome pra variavel que quero colocar o valor de age (exemplo caso n queira usar o mesmo nome pra variavel e a chave)
