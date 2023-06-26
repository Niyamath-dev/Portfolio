(function ($) {
    "use strict";

    $('.counter-count').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {

            //chnage count up speed here
            duration: 3000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

    // ===== Scroll to Top ==== 
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 50) {
            $('#back-to-top').fadeIn(200);
        } else {
            $('#back-to-top').fadeOut(200);
        }
    });
    $('#back-to-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
    });


    // $(document).ready(function () {
    //     $(".nav-tabs a").click(function () {
    //         $(this).tab('show');
    //     });
    // });

    
 
})(jQuery);


