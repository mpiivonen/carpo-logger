var fs = require('fs');
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
        if(mode == "file")
            appendToFile(text, "notice");
        else if(mode == "logger")
            sendToLogger(text, "notice");
    },
    
    info: function(text)
    {
        if(mode == "file")
            appendToFile(text, "info");
        else if(mode == "logger")
            sendToLogger(text, "info");
    },
    
    error: function(text)
    {
        if(mode == "file")
            appendToFile(text, "err");
        else if(mode == "logger")
            sendToLogger(text, "err");
    },
    
    warn: function(text)
    {
        if(mode == "file")
            appendToFile(text, "warning");
        else if(mode == "logger")
            sendToLogger(text, "warning");
    },
        
    sendToLogger: function(level, row)
    {
        exec('logger -p ' + facility + "." + level + " " + row);
    },
    
    appendToFile: function(level, row)
    {
        fs.exists(file, function(exists)
        {
            fs.appendFile(file, row, function (err) {
                throw(err);
            });
        });
    }
 }