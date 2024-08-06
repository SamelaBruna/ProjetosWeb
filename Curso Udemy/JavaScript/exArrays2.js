//Atribuicao via desestruturacao

// //Sintaxe de Espalhamento (Spread syntax (...)) permite que um objeto
// iterável, como uma expressão de array ou uma string seja expandido
// para ser usado onde zero ou mais argumentos (para chamadas de funções)
// ou elementos (para arrays literais) são esperados, ou que um objeto
//  seja expandido onde zero ou mais pares propriedade:valor (para objetos literais)
//  são esperados.

const numbers = [24, 46, 200, 196, 231, 100, 2, 409, 331];
const [firstNumber, secondNumber, ...rest] = numbers; //cada variavel ira receber um item de dentro do array
console.log(firstNumber, secondNumber, rest);
const [one, , three, , five, , seven] = numbers; //ao colocar espacos vazios a atribuicao eh feita de maneira alternada
console.log(one, three, five, seven);
const numbersList = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const [list1, list2, list3] = numbersList;
console.log(list2[2]);
