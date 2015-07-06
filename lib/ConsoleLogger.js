// Console logger - Logs Debug, Info, and Error messages to console
// Impliments interface ILogger

var ILogger = require('./interfaces/ILogger.js');

var ConsoleLogger = function() { };
ConsoleLogger.prototype = Object.create(ILogger);

// ILogger Implementation
ConsoleLogger.prototype.Debug = function(s){
    console.log('Debug: ' + s);
};

ConsoleLogger.prototype.Info = function(s) {
    console.log('Info: ' + s);
};

ConsoleLogger.prototype.Error = function(s) {
    console.log('Error: ' + s);
};

module.exports = ConsoleLogger;
