class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  speak() {
    console.log(`${this.name} is speaking`);
  }
  eat() {
    console.log(`${this.name} is eating`);
  }
  drink() {
    console.log(`${this.name} is driking`);
  }
}

const p1 = new Person("Bruna", "Ferreira");
console.log(p1.speak());
