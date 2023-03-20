'use strict';

// $('#requestAjaxModal').on('shown.bs.modal', function (e) {
//     e.preventDefault();
//     console.log('aaaa');
// });

// var testElement = document.getElementById('requestAjaxModal');
// console.log(testElement);


var modal = $('#requestAjaxModal');
var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        var attributeValue = $(mutation.target).prop(mutation.attributeName);
        if(attributeValue.includes('show')) {
            var url = $('.btn-mymodal').attr('href');
            console.log("Class attribute changed to:", attributeValue);
            console.log(url);
            $.ajax({
                url: url,
                type: 'get',
                dataType: 'json',
                success: function (data) {
                    console.log('success');
                    console.log(data);
                },
                error: function (data) {
                    console.log('error');
                    console.log(data);
                }
            });
        }
    });
});

observer.observe(modal[0], {
    attributes: true,
    attributeFilter: ['class']
});

// $(document).on('shown.bs.modal','#requestAjaxModal', function (e) {
//     e.preventDefault();
//     console.log('bbbb');
// });
