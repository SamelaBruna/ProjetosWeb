const getFlagValue = require("./flags");
console.log(
  "Oi " + getFlagValue("--name"),
  "sua idade é " + getFlagValue("--age")
);
