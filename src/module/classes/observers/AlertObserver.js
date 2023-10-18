const acceptedAmount = 10 // amount of errors
const period = 60 // in seconds
const periodBetweenEmails = 3600 // One email per hour

/**
 * This class is listen to the errors and dispatch and event when the amount is to hight for the period
 */
class AlertObserver{
    constructor(){
        this._errorOccurrencies = []
        this._allowAlarm = true
    }

    /**
     * Register the moment when the error occurs and start the check
     */
    reportError(){
        const secondsSinceEpoch = Math.round(Date.now() / 1000)
        this._errorOccurrencies.push(secondsSinceEpoch)
        this._checkLimit()
    }

    /**
     * Checks if the amount of errore are not ecceded and if the alarm is alowed. If both true, it sends the alarm
     */
    _checkLimit(){
        const validOcurrencues = this._errorOccurrencies.filter( e => e > this.lastCut).length
        this._verifyAlarmTimer()
        // console.log(validOcurrencues, acceptedAmount, this._allowAlarm)
        if(validOcurrencues>acceptedAmount && this._allowAlarm){
            this._sendAlarm()
            this._deactivateAlarm()
        }
    }

    /**
     * Based on the last alarm, it checks if another alarma can be sent
     */
    _verifyAlarmTimer(){
        const activationTime = this._lastAlarm + 3600
        if( this.secondsSinceEpoch >activationTime){
            this._allowAlarm = true
        }
    }

    /**
     * send the alarm
     * @todo Implement the real alarm
     */
    _sendAlarm(){
        console.log('Send Email')
    }

    /**
     * Desctivate the alarm to avoid spam
     */
    _deactivateAlarm(){
        this._allowAlarm = false
        this._lastAlarm = this.secondsSinceEpoch
    }

    /**
     * Time sinse epoch in seconds
     */
    get secondsSinceEpoch(){
        return Math.round(Date.now() / 1000)
    }

    /**
     * @returns Int last minute(period in seconds) cut in time
     */
    get lastCut(){
        return this.secondsSinceEpoch - period
    }
}

module.exports = AlertObserver