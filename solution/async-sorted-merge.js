'use strict'

const _ = require('lodash')

module.exports = (logSources, printer) => {
  _.sortBy(
  	_.sortBy(
  		logSources,
			[(log) => {return log.popAsync().date}]
		),
		[(log) => {return log.last.date}]
	).forEach((log) => {
    printer.print(log.last)
  })

  printer.done()
}