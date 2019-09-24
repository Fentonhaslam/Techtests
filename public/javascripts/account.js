class Account {

    constructor() {
        this._balance = 0;
        this.transaction = [];
    }

    get balance() {
        return this._balance
    }

    deposit(amount) {
        this._balance += amount
        this.credit(amount)
    }

    credit(amount) {
        this.transaction.push({
            "Date": Date(),
            "Credit": amount,
            "Debit": "",
            'Balance': this._balance
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
        this.transaction.push({
            "Date": Date(),
            "Credit": "",
            "Debit": amount,
            'Balance': this._balance
        })
    }
    get statement() {
        var transactions = this.transaction.toString()
        return JSON.stringify(transactions);
    }
}


module.exports = Account;