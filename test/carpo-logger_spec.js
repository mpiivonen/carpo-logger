'use strict';

var mod = require('../lib/carpo-logger');

exports['setMode'] = function(test)
{
    mod.setMode('a');
    test.equal(mod.mode, 'a');
    test.notEqual(mod.mode, 1);
    test.done();
}