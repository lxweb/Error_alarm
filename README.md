# Error Alarm

Welcome to error alarm, this is a simple tool used to send a notification every time the number of errors in an application exceeds the configured limit.

## Configuratio

In this file: [src/module/classes/observers/AlertObserver.js](https://github.com/lxweb/Error_alarm/blob/main/src/module/classes/observers/AlertObserver.js) you will find the parameters to set up the module.
By default:
```bash
const acceptedAmount = 10 // amount of errors
const period = 60 // in seconds
const periodBetweenEmails = 3600 // One email per hour
```

## Test
To test this module just run the file "/src/module/logger.js"
