class Device {
  constructor(name) {
    this.name = name;
    this.statusOn = false;
  }

  turnOn() {
    if (this.statusOn) {
      console.log(`${this.name} is already turned on`);
      return;
    }
    this.statusOn = true;
  }
  turnOff() {
    if (!this.statusOn) {
      console.log(`${this.name} is already turned off`);
      return;
    }
    this.statusOn = false;
  }
}

const d1 = new Device("smartphone");
console.log(d1);
d1.turnOn();
console.log(d1);
d1.turnOn();
console.log(d1);
d1.turnOff();
console.log(d1);
d1.turnOff();
console.log(d1);

//criand0 uma heranca
class Smartphone extends Device {
  constructor(name, color, model) {
    super(name); //referente a super classe (classe pai), aqui eu passo os parametros que o construtor dela recebe
    //o super basicamente chama o construtor da classe pai e executar ele aqui dentrp
    this.color = color;
    this.model = model;
  }
}

const s1 = new Smartphone("iPhone", "white", "16 Pro");
console.log(s1);
