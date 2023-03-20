window.jQuery = window.$ = require('jquery');

// $('.form-toggle-anchor').click(function (e) {
//     e.preventDefault();
//     $('.form-toggle-anchor').hide()
//     $('.promo-code-input').show();
// });


$('.form-toggle-anchor').click(function (e) {
    e.preventDefault();
    $('.form-toggle-anchor').addClass('hidden');
    $('.promo-code-input').toggleClass( 'hidden' );
});