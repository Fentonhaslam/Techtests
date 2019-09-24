class Account {

    constructor() {
        this._balance = 0;
        this.transactions = [];
    }

    get balance() {
        return this._balance
    }

    deposit(amount) {
        this._balance += amount
        this.credit(amount)
    }

    credit(amount) {
        this.transactions.push({
            Date: Date(),
            Credit: amount,
            Debit: "",
            Balance: this._balance
        })
    }

    withdraw(amount) {
        if (this._balance < amount) {
            return new Error("Insufficient funds")
        } else {
            this.debit(amount)
            return this._balance -= amount
        }
    }

    debit(amount) {
        this.transactions.push({
            Date: Date(),
            Credit: "",
            Debit: amount,
            Balance: this._balance
        })
    }
}


module.exports = Account;