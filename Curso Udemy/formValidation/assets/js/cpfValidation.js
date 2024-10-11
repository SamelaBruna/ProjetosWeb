function Cpf(num) {
  this.num = num;
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
    const secondDigit = function () {
      const cpf10dig = cpfArray.slice(0, 10);
      const totalFirstDig = cpf10dig
        .map((el, index) => el * (11 - index))
        .reduce((acumulate, value) => acumulate + value);
      const digit = 11 - (totalFirstDig % 11);
      return digit > 9 ? 0 : digit;
    };

    let comparisonCpf = cpfArray.slice(0, 9);
    comparisonCpf.push(firstDigit(), secondDigit());
    if (comparisonCpf.join("") === this.cpfClean) return true;
  };
}

// function geral() {
//   let cpf = new Cpf("6");
//   if (cpf.validation()) {
//     console.log(`O CPF ${cpf.num} é válido!`);
//   } else {
//     console.log(`CPF: ${cpf.num} é INVÁLIDO!`);
//   }
// }
// geral();
