let student1 = {
  name: "Bruna",
  age: 25,
  weight: 45,
  isSubscribed: true,
};

let student2 = {
  name: "Isaac",
  age: 25,
  weight: 80,
  isSubscribed: false,
};

let students = [];

console.log(
  student1.name +
    " de idade " +
    student1.age +
    " pesa " +
    student1.weight +
    " kg"
);

students = [student1];

console.log(students[0]);

students = [student1, student2];

console.log(students);

console.log(a);
//let a = 1; erro de refer
var a = 1; //undefined
