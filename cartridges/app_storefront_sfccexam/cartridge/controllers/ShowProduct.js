'use strict';

var server = require('server');
var ProductMgr = require('dw/catalog/ProductMgr');

server.get('ShowProduct', function (req, res, next) {
    var viewData = res.getViewData();
    var params = viewData.queryString;
    var param = params.split("=")
    var productId = param[1];

    // var ProductFactory = require('*/cartridge/scripts/factories/product');
    // var xxx = req.querystring;
    // var product = ProductFactory.get(xxx);

    res.setViewData(productId);
    res.render("Product", { productId: productId });
    return next();
});

module.exports = server.exports();