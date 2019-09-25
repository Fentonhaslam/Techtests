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
            ModeDate.set('2015-2-15')
            expect(day.retrieveDate()).toBe('15/02/2015')
        })
    })
})