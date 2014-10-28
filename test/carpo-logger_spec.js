'use strict';

var mod = require('../lib/carpo-logger');

exports['setMode'] = function(test)
{
    test.equal(mod.setMode('a'), 'a');
    test.notEqual(mod.setMode('a'), 1);
    test.done();
}