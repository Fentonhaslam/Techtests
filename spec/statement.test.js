const Statement = require('../public/javascripts/statement');

describe('Statement', () => {
    var statement
    beforeEach(() => {
        statement = new Statement()
    })
    describe('message', () => {
        test('returns a correctly formatted string', () => {
            const spy = jest.spyOn(console, 'log')

            statement.message([{
                date: '14/01/2012',
                credit: 50,
                debit: 0,
                balance: 50
            }])
            expect(spy.mock.calls[0][0]).toEqual('Date || Credit || Debit || Balance')
        })

    })
})