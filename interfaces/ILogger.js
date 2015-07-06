var ILogger = {
    Debug: function(s) { console.log('Debug: ' + s); },
    Info: function(s) { console.log('Info: ' + s); },
    Error: function(s) { console.log('Error: ' + s); }
};

module.exports = ILogger;
