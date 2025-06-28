const fs = require('fs');
const path = require('path');

const logFilePath = path.join(__dirname, 'log.txt');
const maxSize = 100; // bytes

function logToFile(logMessage) {
    fs.appendFile(logFilePath, logMessage + '\n', (err) => {
        if (err) {
            console.error('Error writing to log file:', err);
        } else {
            fs.stat(logFilePath, (err, stats) => {
                if (err) {
                    console.error('Error getting file stats:', err);
                    return;
                }
                if (stats.size > maxSize) {
                    fs.unlink(logFilePath, (err) => {
                        if (err) {
                            console.error('Error deleting log file:', err);
                        } else {
                            console.log('Log file deleted due to size exceeding limit.');
                        }
                    });
                }
            });
        }
    });
}

// Example usage:
logToFile('This is a new log message.');
logToFile('Another log message.');

// To test the deletion, add a large number of log messages to trigger the deletion.
// For example, call logToFile() many times with some content.
// For testing, I am adding a for loop to add many messages to trigger the file deletion.
for (let i = 0; i < 5; i++) {
    logToFile('Large message ' + i);
}