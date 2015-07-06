var fs = require('fs');
var ILogger = require('../interfaces/ILogger.js');
var logPath = 'c:\\users\\matt\\workspace\\xcrmpro\\logs';

var FileLogger = function() { this._logPath = logPath; };
FileLogger.prototype = Object.create(ILogger);

// Helper methods
FileLogger.prototype.LogToFile = function(f, s) {
    var fileName = this._logPath + '\\' + f;
    var logFile = fs.createWriteStream(fileName, {'flags':'a'});
    logFile.end(s+'\n');
};

// ILogger Implementation
FileLogger.prototype.Debug = function(s){
    this.LogToFile('debug.log', s);
};

FileLogger.prototype.Info = function(s) {
    this.LogToFile('info.log', s);
};

FileLogger.prototype.Error = function(s) {
    this.LogToFile('error.log', s);
};

module.exports = FileLogger;
