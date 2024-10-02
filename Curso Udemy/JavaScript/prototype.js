function Person(name, surname) {
  this.name = name;
  this.surname = surname;
}

Person.prototype.fullName = function () {
  return this.name + " " + this.surname;
};

const p1 = new Person("Maria", "F");
const p2 = new Person("Jose", "F");

//criar metodos dentro do prototype
function Product(name, price) {
  this.name = name;
  this.price = price;
}

Product.prototype.discount = function (percentage) {
  this.price = this.price - this.price * (percentage / 100);
};

Product.prototype.increasePrice = function (percentage) {
  this.price = this.price + this.price * (percentage / 100);
};

const pr1 = new Product("livro", 10);
pr1.discount(30);
pr1.increasePrice(50);
console.log(pr1);
const pr2 = {
  name: "caneca",
  price: 4,
};

Object.setPrototypeOf(pr2, Product.prototype); //de quem eu quero setar e quem vai ser o prototype dele
pr2.increasePrice(20);
console.log(pr2);

//posso criar um objeto e ja setar logo de cara seu prototype:
const pr3 = Object.create(Product.prototype, {
  size: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 38,
  },
  price: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 87,
  },
});
pr3.name = "camisa";
pr3.discount(10);
console.log(pr3);
