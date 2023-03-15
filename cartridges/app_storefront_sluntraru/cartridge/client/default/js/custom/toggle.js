window.jQuery = window.$ = require('jquery');
$('.form-toggle-anchor').css('color', 'red');
$('.form-toggle-anchor').click(function (e) {
    e.preventDefault();
    $('.promo-code-form').toggle();
});