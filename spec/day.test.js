const Day = require('../public/javascripts/day')
var MockDate = require('mockdate')

describe('Day', () => {
    var day
    beforeEach(() => {
        day = new Day()
    })

    describe('retrieveDate', () => {
        test('returns a string indicating the current date', () => {
            console.log(MockDate)
            MockDate.set('2015-2-7')
            expect(day.retrieveDate()).toBe('7/2/2015')
        })
    })
})