let family = {
  incomes: [500, 300, 210, 745],
  expenses: [330.25, 125, 475, 52, 3000],
};

function sum(array) {
  let total = 0;
  for (let value of array) {
    total = total + value;
  }
  return total;
}

function calculateBalance() {
  totalIncomes = sum(family.incomes);
  totalExpenses = sum(family.expenses);
  totalInEx = totalIncomes - totalExpenses;

  const its0k = totalInEx >= 0;
  let balanceText = "negativo";

  if (its0k) {
    balanceText = "Positivo";
  }

  console.log(`Seu saldo é ${balanceText}: R$${totalInEx.toFixed(2)}`);
}

calculateBalance();
