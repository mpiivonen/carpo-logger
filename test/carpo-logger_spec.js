'use strict';

var mod = require('../lib/carpo-logger');

mod.enableUnittest();
var msg = 'test message';

// SETTERS
exports['Mode'] = function(test)
{
    mod.setMode('file');
    test.equal(mod.getMode(), 'file');
    test.notEqual(mod.getMode(), 1);
    
    mod.setMode('logger');
    test.equal(mod.getMode(), 'logger');
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

// FILE
exports['logFile'] = function(test)
{
    mod.setMode('file');
    mod.log(msg);
    test.deepEqual(mod.unitTestObject, {level: 'notice', row: msg, type: 'file'});
    test.done();
}

exports['infoFile'] = function(test)
{
    mod.setMode('file');
    mod.info(msg);
    test.deepEqual(mod.unitTestObject, {level: 'info', row: msg, type: 'file'});
    test.done();
}

exports['errFile'] = function(test)
{
    mod.setMode('file');
    mod.error(msg);
    test.deepEqual(mod.unitTestObject, {level: 'err', row: msg, type: 'file'});
    test.done();
}

exports['warnFile'] = function(test)
{
    mod.setMode('file');
    mod.warn(msg);
    test.deepEqual(mod.unitTestObject, {level: 'warning', row: msg, type: 'file'});
    test.done();
}

// LOGGER
exports['logLogger'] = function(test)
{
    mod.setMode('logger');
    mod.log(msg);
    test.deepEqual(mod.unitTestObject, {level: 'notice', row: msg, type: 'logger'});
    test.done();
}

exports['infoLogger'] = function(test)
{
    mod.setMode('logger');
    mod.info(msg);
    test.deepEqual(mod.unitTestObject, {level: 'info', row: msg, type: 'logger'});
    test.done();
}

exports['errLogger'] = function(test)
{
    mod.setMode('logger');
    mod.error(msg);
    test.deepEqual(mod.unitTestObject, {level: 'err', row: msg, type: 'logger'});
    test.done();
}

exports['warnLogger'] = function(test)
{
    mod.setMode('logger');
    mod.warn(msg);
    test.deepEqual(mod.unitTestObject, {level: 'warning', row: msg, type: 'logger'});
    test.done();
}