window.jQuery = window.$ = require('jquery');
$('.form-toggle-anchor').css("background-color", "red");
$('.form-toggle-anchor').click(function (e) {
    e.preventDefault();
    $('.form-toggle-anchor').hide()
    $('.promo-code-input').show();
});