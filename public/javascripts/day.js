class Day {
    retrieveDate() {
        var today = new Date()
        var day = this._formatDay(today)
        var month = this._formatMonth(today)
        var year = today.getFullYear()
        return day + '/' + month + '/' + year
    }
    _formatDay(today) {
        return String(today.getDate())
    }
    _formatMonth(today) {
        return String(today.getMonth() + 1)
    }
}

module.exports = Day