function zeroToTheLeft(num) {
  return num >= 10 ? num : `0${num}`;
}

// function formatDate(date) {
//   const day = zeroToTheLeft(date.getDate());
//   const month = zeroToTheLeft(date.getMonth());
//   const year = zeroToTheLeft(date.getFullYear());
//   const hour = zeroToTheLeft(date.getHours());
//   const minute = zeroToTheLeft(date.getMinutes());
//   const seconds = zeroToTheLeft(date.getSeconds());
//   return `${day}/${month}/${year} ${hour}:${minute}:${seconds}`;
// }

// const date = new Date();
// const brazilDate = formatDate(date);
// console.log(brazilDate);

//OUTRA FORMA E MAIS SIMPLES:

const date = new Date();
const brazilDate =
  date.toLocaleDateString("pt-br") +
  " " +
  date.toLocaleTimeString("pt-br", { hour: "2-digit", minute: "2-digit" });
console.log(brazilDate);
