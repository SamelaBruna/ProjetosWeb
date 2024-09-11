const numbers = [4, 5, 80, 34, 45, 1, 13, 7, 8, 3, 11, 20];
const doubledNumbers = numbers.map((value) => value * 2);
//console.log(doubledNumbers);
//console.log(numbers);

const persons = [
  { name: "Luiz", age: 65 },
  { name: "Paulo", age: 48 },
  { name: "Rosana", age: 51 },
  { name: "Bruna", age: 26 },
  { name: "Rebeca", age: 18 },
  { name: "Sicrano", age: 50 },
];

//retorne apenas uma string com o nome da pessoa
const objNames = persons.map((obj) => obj.name);
//console.log(objNames);

//remova apenas a chave "nome" do objeto
const withoutNames = persons.map(function (obj) {
  const newObj = { ...obj }; //fazendo uma copia do obj
  delete newObj.name;
  return newObj;
});
console.log(withoutNames);

//adicione uma chave id em casa objeto

const withID = persons.map(function (obj) {
  const newObj = { ...obj }; //fazendo uma copia do obj
  newObj.id = (Math.random() * 1000).toFixed(0);
  return newObj;
});
console.log(withID);
