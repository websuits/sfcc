'use strict';

var server = require('server');

server.get('ex5', function (req, res, next) {
    res.render("ex5");
    return next();
});

module.exports = server.exports();