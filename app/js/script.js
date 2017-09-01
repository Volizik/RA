$(function () {

    //for main tabs
    $('.tabs__content').each(function (i) {
        if (i != 0) {
            $(this).hide(0)
        }
    });
    $(document).on('click', '.tabs__buttons li>a', function (e) {
        e.preventDefault();

        var tabId = $(this).attr('href');
        $('.tabs__buttons li>a').removeClass('active_tab');
        $(this).addClass('active_tab');
        $('.tabs__content').hide();
        $(tabId).fadeIn();
    });

    //for main tabs if window size lower then 1200px
    $(window).resize(function() {
        if (window.innerWidth < 1200) {
            $('.tabs__active-btn').text($('.tabs__buttons .active_tab').text());
            $(document).on('click', '.tabs__active-btn', function () {
                $('.tabs__buttons a').show();
                $('.active_tab').hide();
                $('.tabs__buttons').toggle();
            });
            $(document).on('click', '.tabs__buttons a', function () {
                $('.tabs__active-btn').text($(this).text());
                $('.tabs__buttons').hide();
            });
        }
    });

    //for dropdown
    $(document).on('click', '.drop', function() {
        if ($(this).find('ul').is(':visible')) {
            $(this).find('ul').slideUp();
        } else {
            $('.drop ul').slideUp();
            $(this).find('ul').slideDown();
        }
    });
    $(document).on('click', '.drop li', function () {
        $(this).parent().parent().find('span:first-of-type').text($(this).text());
    });
    $(document).on('click', function (e) {
        if ($(e.target).closest('.drop').length != 1) {
            $('.drop ul').slideUp('fast');
        }
    });

});


