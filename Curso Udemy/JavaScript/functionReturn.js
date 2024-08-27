function multiplier(mult) {
  function multiplication(num) {
    return num * mult;
  }
  return multiplication;
}

//quando eu retorno uma funcao sem executar ela eu estou retornando a funcao em si
//no caso ao retornar multiplication eu estou a retornando em si
//ao chamar a funcao multiplier ela ira retornar a func multiplication
const doubles = multiplier(2);
const triples = multiplier(3);
const quadruples = multiplier(4);

console.log(doubles); //[Function: multiplication]
console.log(doubles(4)); //como doubles eh uma funcao multiplication agora o parametro passado sera o num
console.log(triples(4));
console.log(quadruples(4));

//variáveis doubles,triples e quadruples tem tres funcoes diferentes...
// todas são o retorno de multiplier. Mas cada uma é uma função
// diferente... Como essas funções "lembram" o valor do parâmetro (mult)
// esse valor sera lembrado, toda vez que você executar cada uma delas,
// esse parâmetro vai ter o valor que foi usado na hora da chamada
// para função multiplier. Isso se chama closure.

//#OUTRO EXEMPLO#

function falaFrase(comeco) {
  function falaResto(resto) {
    return comeco + " " + resto;
  }
  return falaResto;
}

const olaMundo = falaFrase("Olá");
console.log(olaMundo("mundo!"));
