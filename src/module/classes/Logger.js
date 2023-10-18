const fs = require('fs')
const AlertObserver = require('./observers/AlertObserver')
/**
 * This class is responsable for logging the error and apply the configuration provided
 */
class Logger {

    /**
     * The constructor starts with a clean list for logs
     */
    constructor(){
        this._writeStrem = fs.createWriteStream('../logs/errors.log', {flags:'a'})
        this._allowObservers = true
        this._alertObserver = new AlertObserver()
    }

    /**
     * 
     * @param {Error} error 
     */
    logError(error){
        const timestamp = new Date().toISOString()
        const logMessage = `${timestamp} - ${error}\n`

        if(this._allowObservers){
            const errorObject = { error, timestamp, logMessage}
            this._runObservers(errorObject)
        }

        this._writeStrem.write(logMessage)
    }

    /**
     * 
     * @param {Obejc} errorObject { error, timestamp, logMessage}
     */
    _runObservers(errorObject){
        this._alertObserver.reportError()
    }

}

class Singleton {

    constructor() {
        if (!Singleton.instance) {
            Singleton.instance = new Logger();
        }
    }
  
    getInstance() {
        return Singleton.instance;
    }
  
  }
  
module.exports = Singleton