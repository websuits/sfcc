"use strict";

var server = require("server");
var csrfProtection = require("*/cartridge/scripts/middleware/csrf");
var consentTracking = require("*/cartridge/scripts/middleware/consentTracking");

server.get("forms", consentTracking.consent, server.middleware.https, csrfProtection.generateToken, function(
    req,
    res,
    next
) {
    var URLUtils = require("dw/web/URLUtils");
    var Resource = require("dw/web/Resource");

    var myform = server.forms.getForm("forms");
    myform.clear();

    res.render("forms", {
        title: Resource.msg("training.form.title.submit", "forms", null),
        myform: myform,
        actionUrl: URLUtils.url("forms-forms").toString()
    });

    next();
});

server.post(
    "SubmitRegistration",
    server.middleware.https,
    consentTracking.consent,
    csrfProtection.generateToken,
    function(req, res, next) {
        var Resource = require("dw/web/Resource");
        var URLUtils = require("dw/web/URLUtils");
        var myform = server.forms.getForm("forms");
        res.render("forms", {
            title: Resource.msg("training.form.title.edit", "forms", null),
            myform: myform,
            actionUrl: URLUtils.url("forms-forms").toString()
        });

        next();
    }
);

module.exports = server.exports();
