'use strict';

var server = require('server');
var Logger = require('dw/system/Logger');
server.get('ajax', function (req, res, next) {
    res.render("ajax");

    var ceva = req;
    var altceva= res;

    // res.json({
        
    // })
    return next();
});

module.exports = server.exports();
