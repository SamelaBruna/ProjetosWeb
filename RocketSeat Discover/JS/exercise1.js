function getScore(n) {
  let endScore;

  if (n >= 90 && n <= 100) endScore = "A";
  else if (n <= 89 && n >= 80) endScore = "B";
  else if (n <= 79 && n >= 70) endScore = "C";
  else if (n <= 69 && n >= 60) endScore = "D";
  else if (n < 60 && n >= 0) endScore = "F";
  else if (n < 0 || n > 100) endScore = "Nota inválida";

  console.log(endScore);
}

getScore(72);
getScore(54);
getScore(0);
getScore(98);
getScore(65);
getScore(80);
getScore(-5);
getScore(101);
