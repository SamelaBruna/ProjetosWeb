//retorne a soma do dobro de todos os pares

const numbers = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const evenNumbers = numbers
  .filter((value) => value % 2 === 0)
  .map((value) => value * 2)
  .reduce((acumulate, value) => (acumulate += value));
console.log(evenNumbers);

let total = 0;
numbers.forEach((value) => {
  console.log(value, total);
  total += value;
});
console.log(total);

function squareSum(numbers) {
  const quadrado = numbers.map((value) => value ** 2);
  console.log(quadrado);
  const soma = quadrado.reduce(function (ac, value) {
    ac += value;
    console.log(ac);
  }, 0);
}

squareSum(numbers);
const string = "test";
console.log(typeof string.length);
console.log(Math.trunc(7 / 2));
