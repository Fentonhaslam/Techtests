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
        expect(account.transaction[0]).toHaveProperty('Balance', 50)
        expect(account.transaction[0]).toHaveProperty('Credit', 50)
    })

    test("saves a debit transaction in an array", () => {
        account.deposit(50);
        account.withdraw(40);
        expect(account.transaction[1]).toHaveProperty('Debit', 40)
        console.log(account.transaction)
    })

    test('prints all transactions as a statement', () => {
        account.deposit(1000);
        account.deposit(2000);
        account.withdraw(500);
        console.log(account.statement)
        expect(account.statement).toMatch(
            "date || credit || debit || balance 14/01/2012 || || 500.00 || 2500.00 13/01/2012 || 2000.00 || || 3000.00 10/01/2012 || 1000.00 || || 1000.00")
    })
});