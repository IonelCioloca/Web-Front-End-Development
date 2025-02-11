$(document).ready(function () {
    function setContentHeight() {
        if ($(window).height() > 715 && $(window).width() > 992) {
            var navHeight = $('.nav').outerHeight();
            $('.adjust-sett').css('height', 'calc(100vh - ' + navHeight + 'px)');
        }
    }
    setContentHeight();
    $(window).resize(function () {
        setContentHeight();
    });
});
