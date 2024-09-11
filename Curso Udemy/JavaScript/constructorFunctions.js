function Person(name, surname) {
  //privados
  const id = (Math.random() * (5000 - 1) + 1).toFixed(0);

  //publicos
  this.name = name;
  this.surname = surname;
  this.method = function () {
    console.log(this.name + ": Sou um objeto pessoa e tenho um metodo");
    console.log(id);
  };
}

const p1 = new Person("Bruna", "Ferreira");
const p2 = new Person("Fulando", "de Beltrano");
p1.method();
p2.method();
