'use strict';



// $( window ).scroll(function() {
//    var triggeRef = $('.trigger-sticky');
//    console.log(triggeRef);
//    var top  = triggeRef[0].scrollTop();
//    console.log(top);
//    if (top < -265) {
//       // this.setState({ ctaInView: true });
//       document.body.classList.add('showStickyCta');
//   } else {
//       // this.setState({ ctaInView: false });
//       document.body.classList.remove('showStickyCta');
//   }
// });

$(document).ready(function(){
   $(window).bind('scroll', function() {
      var scrollTop = $(window).scrollTop();
      var elementOffset = $('.trigger-sticky').offset().top;
      var currentElementOffset = (elementOffset - scrollTop);
      console.log(currentElementOffset);

      if (currentElementOffset < 0) {
         // this.setState({ ctaInView: true });
         document.body.classList.add('showStickyCta');
      } else {
            // this.setState({ ctaInView: false });
            document.body.classList.remove('showStickyCta');
      }
   });
});
