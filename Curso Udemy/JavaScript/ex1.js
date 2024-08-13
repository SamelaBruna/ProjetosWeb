function max(n1, n2) {
  if (n1 > n2) return n1;
  return n2;
}

const max2 = (n1, n2) => {
  return n1 > n2 ? n1 : n2;
};

const max3 = (n1, n2) => (n1 > n2 ? n1 : n2);

console.log(max(37, 20));
console.log(max2(283, 395));
console.log(max3(139, 543));

const ePaisagem = (width, height) => {
  return width > height;
};

console.log(ePaisagem(280, 200));

function fizzBuzz(num) {
  if (typeof num !== "number") {
    return num;
  }
  if (num % 3 === 0 && num % 5 === 0) {
    return "FizzBuzz";
  }

  if (num % 3 === 0) {
    return "Fizz";
  }
  if (num % 5 === 0) {
    return "Buzz";
  }

  return num;
}

for (let i = 0; i <= 300; i++) {
  console.log(i, fizzBuzz(i));
}
