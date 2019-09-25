var Statement = require("./statement")
var Transaction = require('./transaction')

class Account {

    constructor(statement = new Statement(), transaction = Transaction) {
        this._statement = statement
        this._balance = 0;
        this.transactions = [];
        this._transaction = transaction
    }

    get balance() {
        return this._balance
    }

    deposit(amount) {
        this._balance += amount
        this.credit(amount)
    }

    credit(credit) {
        var debit = ''
        var newTransaction = new this._transaction(credit, debit, this._balance)
        this.transactions.unshift(newTransaction)
        return newTransaction
    }

    withdraw(amount) {
        if (this._balance < amount) {
            return new Error("Insufficient funds")
        } else {
            this.debit(amount)
            return this._balance -= amount
        }
    }

    debit(debit) {
        var credit = ''
        var newTransaction = new this._transaction(credit, debit, this._balance)
        this.transactions.unshift(newTransaction)
        return newTransaction
    }
    printStatement() {
        return this._statement.message(this.transactions)
    }
}


module.exports = Account;