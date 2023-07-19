function transformDegree(degree) {
  const isCelcius = degree.toUpperCase().includes("C");
  const isFahrenheit = degree.toUpperCase().includes("F");

  if (!isCelcius && !isFahrenheit) {
    throw new Error("Grau não identificado");
  }

  let degreeWithoutLetter;
  let degreeSign;
  let formula;

  if (isCelcius) {
    /* C -> F  */
    degreeWithoutLetter = Number(degree.toUpperCase().replace("C", ""));
    formula = (celcius) => ((celcius * 9) / 5 + 32).toFixed(0);
    degreeSign = "F";
  } else {
    /* F -> C  */
    degreeWithoutLetter = Number(degree.toUpperCase().replace("F", ""));
    formula = (fahrenheit) => (((fahrenheit - 32) * 5) / 9).toFixed(0);
    degreeSign = "C";
  }

  return formula(degreeWithoutLetter) + degreeSign;
}

try {
  console.log(transformDegree("80F"));
} catch (error) {}
