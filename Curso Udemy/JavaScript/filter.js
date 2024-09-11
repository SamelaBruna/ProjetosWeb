const numbers = [4, 5, 80, 34, 45, 1, 13, 7, 8, 3, 11, 20];
//for (let valor of numbers) {
// if (valor > 10) {
// console.log(valor);
// }
//}
const filteredNumbers = numbers.filter((valor) => valor > 10); //arrow function
//nessa funcao de callback ela vai percorrer todos os elementos do array e checar se os valores sao maiores que 10
//console.log(filteredNumbers);
const persons = [
  { name: "Luiz", age: 65 },
  { name: "Paulo", age: 48 },
  { name: "Rosana", age: 51 },
  { name: "Bruna", age: 26 },
  { name: "Rebeca", age: 18 },
  { name: "Sicrano", age: 50 },
];
// retorne as pessoas que tem 5 letras ou mais no nome
//retorne as pessoas com mais de 50 anos
// retorne as pessoas cujo nome termina com a

const names5 = persons.filter((obj) => obj.name.length >= 5);
//console.log(names5);

const persons50orPlus = persons.filter((obj) => obj.age > 50);
//console.log(persons50orPlus);

const endsWithA = persons.filter((obj) => obj.name.toLowerCase().endsWith("a"));
console.log(endsWithA);
