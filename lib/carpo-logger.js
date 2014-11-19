var fs = require('fs');
var exec = require('child_process').exec;
/*
    Modes:
        
*/
module.exports = {
     
    mode: "file",
    file: "./custom.log",
    facility: "Local0",
    unitTestObject: {},
    unittest: false,
    
    enableUnittest: function() {this.unittest = true;},
    getCustomLogFile: function() { return this.file; },
    setCustomLogFile: function(file) { this.file = file; }, // Custom Log location
    
    getMode: function() { return this.mode; },
    setMode: function(mode) { this.mode = mode; }, // FILE OR LOGGER
    
    getLoggerFacility: function() { return this.facility; },
    setLoggerFacility: function(facility) { this.facility = facility; }, // Facility (local0 to local7)

    log: function(text)
    {
        if(this.mode == "file")
            this.appendToFile(text, "notice");
        else if(this.mode == "logger")
            this.sendToLogger(text, "notice");
    },
    
    info: function(text)
    {
        if(this.mode == "file")
            this.appendToFile(text, "info");
        else if(this.mode == "logger")
            this.sendToLogger(text, "info");
    },
    
    error: function(text)
    {
        if(this.mode == "file")
            this.appendToFile(text, "err");
        else if(this.mode == "logger")
            this.sendToLogger(text, "err");
    },
    
    warn: function(text)
    {
        if(this.mode == "file")
            this.appendToFile(text, "warning");
        else if(this.mode == "logger")
            this.sendToLogger(text, "warning");
    },
        
    sendToLogger: function(row, level)
    {
        if(this.unittest)
            return this.unitTestObject = {level: level, row: row, type: 'logger'};
        
        exec('logger -p ' + this.facility + "." + level + " " + row);
    },
    
    appendToFile: function(row, level)
    {
        if(this.unittest)
            return this.unitTestObject = {level: level, row: row, type: 'file'};
        
        fs.appendFile(this.file, row, function (err) {
            throw(err);
        });
    }
 };