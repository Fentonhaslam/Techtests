const Account = require('../public/javascripts/account');

describe('Account', () => {
    var account

    beforeEach(() => {
        account = new Account;
    })

    test('views the total amount in an account', () => {
        expect(account.balance).toEqual(0);
    });

    test('can deposit an amount', () => {
        account.deposit(50);
        expect(account.balance).toEqual(50);
    });

    test('withdraw an amount', () => {
        account.deposit(50);
        account.withdraw(40);
        expect(account.balance).toEqual(10);
    });

    test("can't withdraw funds in amount", () => {
        account.deposit(50);
        expect(account.withdraw(51)).toThrowErrorMatchingSnapshot("Insufficient funds");
    });

    test("saves a credit transaction in an array", () => {
        account.deposit(50);
        expect(account.transactions[0]).toHaveProperty("Balance", 50)
        expect(account.transactions[0]).toHaveProperty("Credit", 50)
    })

    test("saves a debit transaction in an array", () => {
        account.deposit(50);
        account.withdraw(40);
        expect(account.transactions[1]).toHaveProperty('Debit', 40)
        console.log(account.transaction)
    })
});