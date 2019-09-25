const Account = require('../public/javascripts/account');

describe('Account', () => {
    var account
    var mockStatement

    beforeEach(() => {
        mockStatement = jest.fn()
        mockStatement.message = jest.fn()
        account = new Account(mockStatement);
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

    describe("printStatement", () => {
        test('tests if statement is printed', () => {
            account.printStatement()
            expect(account._statement.message).toHaveBeenCalled()
        })
    })
});