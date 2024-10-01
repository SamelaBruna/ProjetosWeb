function Cpf(num) {
  this.cpfClean = num.replace(/\D+/g, "");
  cpfArray = Array.from(this.cpfClean);

  this.validation = function () {
    let allEquals = cpfArray.every(
      //checando se todos os caract sao iguais
      (number) => number === cpfArray[0]
    );
    if (this.cpfClean.length !== 11 || allEquals) return false;

    const firstDigit = function () {
      const cpf9dig = cpfArray.slice(0, 9);
      const totalFirstDig = cpf9dig
        .map((el, index) => el * (10 - index)) //multiplicando os elementos por 10x ate 2x
        .reduce((acumulate, value) => acumulate + value); //somando os valores multiplicados
      const digit = 11 - (totalFirstDig % 11);
      return digit > 9 ? 0 : digit;
    };
    console.log(firstDigit());

    const secondDigit = function () {
      const cpf9dig = cpfArray.slice(0, 10);
      const totalFirstDig = cpf9dig
        .map((el, index) => el * (11 - index))
        .reduce((acumulate, value) => acumulate + value);
      const digit = 11 - (totalFirstDig % 11);
      return digit > 9 ? 0 : digit;
    };
    console.log(secondDigit());

    return true;
  };
}

let cpf = new Cpf("705.484.450-52");
console.log(cpf.validation());
