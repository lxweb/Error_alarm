
const Logger = require('./classes/Logger')
const loggerInstance = new Logger().getInstance()

setInterval(function () {
    loggerInstance.logError('TEST logger')
}, 1000);