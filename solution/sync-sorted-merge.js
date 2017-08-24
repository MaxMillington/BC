'use strict'

const _ = require('lodash')

module.exports = (logSources, printer) => {
	_.sortBy(logSources, [(log) => {return log.pop().date}]).forEach((log) => {
		printer.print(log.last)
	})

	printer.done()
}