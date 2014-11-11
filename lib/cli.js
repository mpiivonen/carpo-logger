'use strict';

var fs = require('fs');
var info = require('../package.json');
var logger = require("./carpo-logger.js");

module.exports = {
    help: function()
    {
        fs.readFile('./help.md', "utf-8", function(err, data)
        {
            if(err)
                console.error('ERROR Reading help file');
            
            console.log(data);
        });
    },
    
    version: function()
    {
        console.log("Current versio: " + info.version);
        console.log("Copyright (c) 2014 " + info.author.name);
        console.log("License: " + info.licenses[0].type);
    },
    
    setCustomLogFile: function(file) { logger.setCustomLogFile(file); }, // Custom Log location
    setMode: function(mode) { logger.setMode(mode); }, // FILE OR LOGGER
    
    setLoggerFacility: function(facility) { logger.setLoggerFacility(facility); },
    
    log: function(text)
    {
        logger.log(text);
    },
    
    info: function(text)
    {
        logger.info(text);
    },
    
    error: function(text)
    {
        logger.error(text);
    },
    
    warn: function(text)
    {
        logger.warn(text);
    },
};