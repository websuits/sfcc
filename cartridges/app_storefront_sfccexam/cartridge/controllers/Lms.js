'use strict';

var server = require('server');

server.get('Test', function (req, res, next) {
    // var sessionVar = "Test"
    res.render("lms");
    return next();
});

module.exports = server.exports();