//Entendendo o uso de funções como argumento de outra função
function isEven(number) {
  return number % 2 == 0;
}

const list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(list.filter(isEven));

function isVogal(letra) {
  let listVogals = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < listVogals.length; i++) {
    if (listVogals[i] == letra) return true;
  }
  return false;
}

const letras = ["1", "2", "c", "d", "e", "a", "h", "i", "a"];

console.log(letras.filter(isVogal));

const people = [
  { name: "Isaaac", gender: "F" },
  { name: "Bruna", gender: "M" },
];

function genderisFemale(objeto) {
  return objeto.gender == "F";
}

console.log(people.filter(genderisFemale));

//Funções Construtoras
function Person(name, gnd) {
  this.name = name;
  this.gender = gnd;
  this.walk = function () {
    return this.name + " está andando";
  };
}

const bruna = new Person("Bruna", "F");
console.log(bruna.walk());
console.log(bruna);
