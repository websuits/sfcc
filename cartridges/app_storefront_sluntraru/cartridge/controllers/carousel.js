'use strict';

var server = require('server');

server.get('carousel', function (req, res, next) {
    res.render("carousel");
    return next();
});

module.exports = server.exports();
