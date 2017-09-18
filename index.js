
const M = require('moment')
const _ = require('lodash')
const chalk = require('chalk')
const MomentRange = require('moment-range')

const moment = MomentRange.extendMoment(M)

let year = moment().range('year')

_.forEach(Array.from(year.by('months')), month => {
    console.log(_.pad(month.format('MMMM'), 26, ' '))
    console.log('S   M   T   W   Th  F   S   ')

    let monthRange = month.range('month')
    let firstDay = monthRange.start.day()

    // Here, we get an array of days in the month
    let monthDays = Array.from(monthRange.by('days'))

    // Then, we'll perform several operations on this array of days
    _.chain(monthDays)
        .map(day => { // Transforms items in the array
            let dateOutput = day.format('DD') // TODO: Change this to output a two-digit date

            // TODO: Highlight September 10th
            // TODO: Highlight YOUR birthday!
            
            return dateOutput
        })
        .tap(days => { // Allows us to manipulate the collection while chaining
            (days.unshift(firstDay)) // using days.unshift('  '))so that the 1st ends up under the right day column
            
        })
        .chunk(7) // Changes the array of days to be an array of weeks, each week containing 7 items from the days array
        .each(week => {
            // TODO: Join the days together to form one string representing the week
            console.log( _.padEnd(week, 2, '  ')) // TODO: console.log it
        })
        .value() // This triggers the above operations on the chain

    console.log('') // Puts a blank line between each month
})