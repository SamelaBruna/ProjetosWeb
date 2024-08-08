const numbers = [1, 2, 3, 4, 5];
console.log("continue:");
for (let num of numbers) {
  if (num === 2) {
    continue;
  }
  console.log(num);
}
console.log("break:");
for (let num of numbers) {
  if (num === 4) {
    break;
  }
  console.log(num);
}
