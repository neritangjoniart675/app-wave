// Filename: elaborate_code.js
// Description: This elaborated code simulates a basic banking system with multiple accounts, transactions, and balance management.

// Account class
class Account {
  constructor(accountNumber, accountName, initialBalance) {
    this.accountNumber = accountNumber;
    this.accountName = accountName;
    this.balance = initialBalance;
    this.transactions = [];
  }

  generateTransactionId() {
    return Math.floor(Math.random() * 1000000);
  }

  deposit(amount) {
    if (amount <= 0) {
      console.error("Invalid deposit amount.");
      return;
    }

    const transactionId = this.generateTransactionId();
    this.transactions.push({
      id: transactionId,
      type: "Deposit",
      amount: amount,
      date: new Date(),
    });

    this.balance += amount;
    console.log(`Deposit of ${amount} successfully made. New balance: ${this.balance}`);
  }

  withdraw(amount) {
    if (amount <= 0 || amount > this.balance) {
      console.error("Invalid withdrawal amount.");
      return;
    }

    const transactionId = this.generateTransactionId();
    this.transactions.push({
      id: transactionId,
      type: "Withdrawal",
      amount: amount,
      date: new Date(),
    });

    this.balance -= amount;
    console.log(`Withdrawal of ${amount} successfully made. New balance: ${this.balance}`);
  }
}

// Bank class
class Bank {
  constructor(bankName) {
    this.bankName = bankName;
    this.accounts = [];
  }

  createAccount(accountName, initialBalance) {
    const accountNumber = this.generateAccountNumber();
    const account = new Account(accountNumber, accountName, initialBalance);
    this.accounts.push(account);

    console.log(`Account created successfully. Account Number: ${accountNumber}`);
    return accountNumber;
  }

  getAccount(accountNumber) {
    return this.accounts.find((account) => account.accountNumber === accountNumber);
  }

  deposit(accountNumber, amount) {
    const account = this.getAccount(accountNumber);
    if (account) {
      account.deposit(amount);
    } else {
      console.error("Account not found.");
    }
  }

  withdraw(accountNumber, amount) {
    const account = this.getAccount(accountNumber);
    if (account) {
      account.withdraw(amount);
    } else {
      console.error("Account not found.");
    }
  }

  generateAccountNumber() {
    return Math.floor(Math.random() * 1000000000);
  }
}

// Example usage
const bank = new Bank("My Bank");

const account1 = bank.createAccount("John Doe", 500);
const account2 = bank.createAccount("Jane Smith", 1000);

bank.deposit(account1, 200);
bank.withdraw(account2, 700);

console.log(bank);

// Output:
// Account created successfully. Account Number: 47823920
// Account created successfully. Account Number: 93857291
// Deposit of 200 successfully made. New balance: 700
// Withdrawal of 700 successfully made. New balance: 300
// Bank {
//   bankName: 'My Bank',
//   accounts: [
//     Account {
//       accountNumber: 47823920,
//       accountName: 'John Doe',
//       balance: 700,
//       transactions: [
//         { id: 329211, type: 'Deposit', amount: 200, date: 2021-11-01T19:31:10.543Z }
//       ]
//     },
//     Account {
//       accountNumber: 93857291,
//       accountName: 'Jane Smith',
//       balance: 300,
//       transactions: [
//         { id: 848169, type: 'Withdrawal', amount: 700, date: 2021-11-01T19:31:10.557Z }
//       ]
//     }
//   ]
// }