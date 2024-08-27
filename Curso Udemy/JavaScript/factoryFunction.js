//FACTORY FUNCTION

function person(name, surname, hgt, wgt) {
  return {
    name,
    surname,
    height: hgt,
    weight: wgt,
    speak(subject) {
      return `${this.name} is talking about ${subject}`;
    },
    bmi() {
      return (this.weight / this.height ** 2).toFixed(2);
    },
  };
}

const p1 = person("bruna", "ferreira", 1.56, 48);
console.log(p1);
console.log(p1.speak("jogos"), p1.bmi());
