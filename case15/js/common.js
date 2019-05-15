$(function () {
    //header
    $(window).scroll(function () {
        var sc = $(window).scrollTop()
        if (sc > 100) {
            $("header").addClass("header")
        } else {
            $("header").removeClass("header")
        }
    });



    //wow
    new WOW().init();

    //animated
    $('.banner>.container, .container>div').addClass('wow').addClass('fadeInUp').attr('data-wow-duration', '2s').attr('data-wow-duration', '1.5s');



    //scrollbtm
    $('.scrollbtm').click(function () {
        $(this).addClass('active');
        $(this).siblings().removeClass('active');

        var name = $(this).attr('data-id');
        var id = "#" + name;
        var top = $(id).first().offset().top;
        $('html, body').animate({ scrollTop: top + 'px' }, 1000);
    });

    $('.scrollbtm2').click(function () {
        $(this).addClass('active');
        $(this).siblings().removeClass('active');

        var name = $(this).attr('data-id');
        var id = "#" + name;
        var top = $(id).first().offset().top;
        $('html, body').animate({ scrollTop: top + 'px' }, 1000);

    });



    //scrollUp
    $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        topDistance: '300', // Distance from top before showing element (px)
        topSpeed: 300, // Speed back to top (ms)
        animation: 'fade', // Fade, slide, none
        animationInSpeed: 200, // Animation in speed (ms)
        animationOutSpeed: 200, // Animation out speed (ms)
        scrollText: '<img src="images/arrow.png">', // Text for element
        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });
});