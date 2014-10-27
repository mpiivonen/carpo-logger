'use strict';

var fs = require('fs');
var info = require('../package.json');

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
    }
};