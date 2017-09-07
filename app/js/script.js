$(function () {

    $('.tabs__content').each(function (i) {
        if (i != 0) {
            $(this).hide(0)
        }
    });
    $(document).on('click', '.tabs__buttons li', function () {
        var itemId = $(this).attr('data-id');
        var activeTab = $('.tabs__content').parent().find('.tabs__content[data-id='+itemId+']');
        $('.tabs__content').hide();
        activeTab.show();
        $('.tabs__buttons li').removeClass('active_tab');
        $(this).addClass('active_tab');
    });

    //for main tabs if window size lower then 1200px
    $('.tabs__active-btn').text($('.tabs__buttons .active_tab').text());
    $(window).resize(function () {
        $('.tabs__active-btn').text($('.tabs__buttons .active_tab').text());
        if (window.innerWidth > 1200) {
            $('.tabs__buttons').show();
            $('.active_tab').show();
            $('.tabs__buttons li').show();
        }
        else {
            $('.tabs__buttons').hide();
            $('.active_tab').hide();
        }
    });
    $(document).on('click', '.tabs__active-btn', function () {
        if (window.innerWidth < 1200) {
            $('.tabs__buttons li').show();
            $('.active_tab').hide();
            $('.tabs__buttons').toggle();
        } else {
            $('.active_tab').show();
            $('.tabs__buttons').show();
            return
        }
    });
    $(document).on('click', '.tabs__buttons li', function () {
        if (window.innerWidth < 1200) {
            $('.tabs__active-btn').text($(this).text());
            $('.tabs__buttons').hide();
        } else {
            $('.tabs__buttons').show();
            return
        }
    });


});


