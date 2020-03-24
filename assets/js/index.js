(function ($) {
    "use strict";

    // Preloader
    $(function () {
        setTimeout(function () {
            $('#preloader').fadeOut('slow', function () {
                $(this).remove();
            });
        }, 2000);
    });

    // AOS Animations
    AOS.init();

})(jQuery);