var fs = require('fs');
var exec = require('child_process').exec;
/*
    Modes:
        
*/
module.exports = {
     
    mode: "file",
    file: "./custom.log",
    facility: "Local0",
    
    setCustomLogFile: function(file) { this.file = file; }, // Custom Log location
    setMode: function(mode) { this.mode = mode; }, // FILE OR LOGGER
    
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
        
    sendToLogger: function(level, row)
    {
        exec('logger -p ' + this.facility + "." + level + " " + row);
    },
    
    appendToFile: function(level, row)
    {
        fs.appendFile(this.file, row, function (err) {
            throw(err);
        });
    }
 };