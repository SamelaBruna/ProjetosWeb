const _speed = Symbol("speed"); //privando a propriedade speed

class Car {
  constructor(model) {
    this.model = model;
    this[_speed] = 0;
  }

  get speed() {
    console.log("GETTER");
    return this[_speed];
  }

  set speed(value) {
    //com o set agora posso setar o valor da propriedade privada speed
    if (typeof value !== "number") return;
    if (value >= 100 || value <= 0) return;
    console.log("GETTER");
    this[_speed] = value;
  }

  speedUp() {
    if (this[_speed] >= 100) return;
    this[_speed]++;
  }

  speedDown() {
    if (this[_speed] <= 0) return;
    this[_speed]--;
  }
}

const car1 = new Car("fusca");
console.log(car1);
car1.speedUp();
car1.speedUp();
console.log(car1);
//car1.speed = 90;
console.log(car1.speed);
