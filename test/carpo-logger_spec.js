'use strict';

var mod = require('../lib/carpo-logger');

exports['Mode'] = function(test)
{
    mod.setMode('a');
    test.equal(mod.getMode(), 'a');
    test.notEqual(mod.getMode(), 1);
    test.done();
}

exports['customFile'] = function(test)
{
    mod.setCustomLogFile('custom.log');
    test.equal(mod.getCustomLogFile(), 'custom.log');
    test.notEqual(mod.getCustomLogFile(), 1);
    test.done();
}