const Bank = require('./public/javascripts/bank');

describe('Bank', () => {
    var bank

    beforeEach(() => {
        bank = new Bank;
    })

    test('views the total amount in a bank', () => {
        expect(bank.balance).toEqual(0);
    });

    test('can deposit an amount', () => {
        bank.deposit(50);
        expect(bank.balance).toEqual(50);
    })

    test('withdraw an amount', () => {
        bank.deposit(50);
        bank.withdraw(40);
        expect(bank.balance).toEqual(10);
    });
});