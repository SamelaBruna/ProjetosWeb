function Account(ag, account, balance) {
  this.ag = ag;
  this.account = account;
  this.balance = balance;
}

Account.prototype.withdraw = function (value) {
  if (this.balance < value) {
    console.log("Insufficient balance");
    this.checkBalance();
    return;
  }

  this.balance -= value;
  this.checkBalance();
};
Account.prototype.deposit = function (value) {
  this.balance += value;
  this.checkBalance();
};
Account.prototype.checkBalance = function () {
  console.log(
    `Ag/c: ${this.ag}/${this.account} Balance: $${this.balance.toFixed(2)}`
  );
};

// heranca

function CurrentAccount(ag, account, balance, limit) {
  Account.call(this, ag, account, balance);
  this.limit = limit;
}

CurrentAccount.prototype = Object.create(Account.prototype);
CurrentAccount.prototype.constructor = CurrentAccount;

CurrentAccount.prototype.withdraw = function (value) {
  if (value >= this.balance + this.limit) {
    console.log("Insufficient balance");
    return;
  }

  this.balance -= value;
  this.checkBalance();
};

const contaCC = new CurrentAccount(2, 3442, 120, 100);
contaCC.withdraw(10);
contaCC.deposit(50);
contaCC.withdraw(170);

console.log();
console.log("Conta poupanca");
console.log();

function SavingsAccount(ag, account, balance) {
  Account.call(this, ag, account, balance);
}

SavingsAccount.prototype = Object.create(Account.prototype);
SavingsAccount.prototype.constructor = SavingsAccount;

const contaPoup = new SavingsAccount(23, 33333, 0);
contaPoup.deposit(1000);
contaPoup.withdraw(1100);
contaPoup.withdraw(500);
