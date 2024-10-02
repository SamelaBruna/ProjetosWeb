function Product(name, price) {
  this.name = name;
  this.price = price;
}

//escrevendo o metodo no prototype
Product.prototype.increase = function (value) {
  this.price += value;
};

Product.prototype.discount = function (value) {
  this.price -= value;
};

function Tshirt(name, price, color) {
  Product.call(this, name, price);
  this.color = color;
}

Tshirt.prototype = Object.create(Product.prototype); //estou criando um obj vazio e setando o prototype desse objeto vazio como Product. Logo o prototype da camiseta vai ser o prototype de product
Tshirt.prototype.constructor = Tshirt;

Tshirt.prototype.increase = function (percentage) {
  this.price = this.price + this.price * (percentage / 100);
};

function Caneca(name, price, material) {
  Product.call(this, name, price);
  this.material = material;
}
Caneca.prototype = Object.create(Product.prototype);
Caneca.prototype.constructor = Caneca;
const produto = new Product("Generico", 9.9);
const camiseta = new Tshirt("regata", 29.9, "branca");
console.log(camiseta);
console.log(produto);
