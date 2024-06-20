//declarao classica de func
function soma(x, y) {
  return x + y;
}

//declaracao de func anonima
const raiz = function (n) {
  return n ** 0.5;
};

console.log(soma(2, 3));
console.log(raiz(16));

//arrow function
const divisao2 = (n) => {
  return n / 2;
};

//outra maneira de escrever uma arrow function:

const divisao3 = (n) => n / 3;

console.log(divisao2(20));
console.log(divisao3(21));
